const grammarApi = require('express').Router();
const grammarController = require('../controllers/GrammarController');

grammarApi.get('/grammar-list', grammarController.getGrammarList);

grammarApi.get('/grammar-html', grammarController.getGrammarHtml);

module.exports = grammarApi;
