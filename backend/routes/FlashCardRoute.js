const flashcardApi = require('express').Router();
const flashcardController = require('../controllers/FlashCardController');

flashcardApi.get('/word-pack', flashcardController.getWordPack);

module.exports = flashcardApi;
