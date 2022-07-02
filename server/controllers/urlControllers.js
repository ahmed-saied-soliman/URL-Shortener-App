import validUrl from 'valid-url';
import shortid from 'shortid';
import { getAbsolutePath } from 'esm-path';

import shortUrl from '../models/URL.js';

const parentDirectoryPath = getAbsolutePath(import.meta.url, '..');

export const createURL = async (req, res) => {
  const { URL } = req.body;
  const inputURL = URL.url;
  if (validUrl.isUri(inputURL)) {
    try {
      let url = await shortUrl.findOne({ url: inputURL });
      if (url) {
        console.log('exist');
        res.status(200).json(url.shortId);
      } else {
        const urlId = shortid.generate();
        url = new shortUrl({
          url: inputURL,
          shortId: urlId,
          date: new Date(),
        });
        await url.save();
        console.log('URL Saved');
        res.status(201).json(url.shortId);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json('Server Error');
    }
  } else {
    res.status(401).json('Invalid Input URL');
  }
};

export const getURL = async (req, res) => {
  const urlId = req.params['id'];
  try {
    const url = await shortUrl.findOne({
      shortId: urlId,
    });
    if (url) {
      return res.redirect(url.url);
    } else {
      res.status(404).sendFile(parentDirectoryPath + '\\public\\404.html');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server Error');
  }
};
