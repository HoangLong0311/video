const gameApi = require('express').Router();
const gameController = require('../controllers/GameController');

// ======== CORRECT WORD GAME ========
gameApi.get('/correct-word/pack', gameController.getWordPackCWG);

// ======== WORD MATCH GAME ========
gameApi.get('/word-match/pack', gameController.getWordPackWMG);

// ======== FAST GAME ========
gameApi.get('/fast-game/pack', gameController.getWordPackFS);

module.exports = gameApi;