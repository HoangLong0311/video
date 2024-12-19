const highscoreApi = require('express').Router();
const highscoreController = require('../controllers/HighScoreController');

highscoreApi.put('/update', highscoreController.putUpdateHighScore);

highscoreApi.get('/leaderboard', highscoreController.getLeaderboard);

module.exports = highscoreApi;