import mongoose from 'mongoose';

const urlSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  shortId: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

const shortUrl = mongoose.model('shortUrl', urlSchema);

export default shortUrl;
