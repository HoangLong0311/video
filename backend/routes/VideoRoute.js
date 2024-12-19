const videoApi = require('express').Router();
const videoController = require('../controllers/VideoController');

videoApi.get('/video-list', videoController.getVideoList);

videoApi.get('/video-html', videoController.getVideoHtml);
videoApi.post('/add-video', videoController.addVideo);

videoApi.delete('/delete-video', videoController.deleteVideo);
videoApi.get('/video-list-all', videoController.getVideoListAll);


module.exports = videoApi;
