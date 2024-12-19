const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxLength: 200,
    trim: true,
  },
  desc: {
    type: String,
    required: true,
    maxLength: 300,
    trim: true,
  },
  html: {
    type: String,
    required: true,
    trim: true,
  },
});

const VideoModel = mongoose.model('Video', videoSchema, 'videos');

module.exports = VideoModel;
