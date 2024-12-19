const GrammarModel = require('../models/Grammar');

exports.getGrammarListService = async () => {
  try {
    const grammars = await GrammarModel.find({}).select('-html');
    return grammars;
  } catch (error) {
    throw error;
  }
};

exports.getGrammarHtmlService = async (_id) => {
  try {
    if (!Boolean(_id)) return null;
    const { html = '' } = await GrammarModel.findById(_id).select('-_id html');
    return html;
  } catch (error) {}
};
