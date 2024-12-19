const videoApi = require('express').Router();
const videoController = require('../controllers/VideoController');

videoApi.get('/video-list', videoController.getVideoList);

videoApi.get('/video-html', videoController.getVideoHtml);

module.exports = videoApi;
