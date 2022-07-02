import express from 'express';

import { getURL, createURL } from '../controllers/urlControllers.js';

const router = express.Router();

router.get('/favicon.ico', (req, res) => res.status(204));
router.post('/', createURL);
router.get('/:id', getURL);

export default router;
