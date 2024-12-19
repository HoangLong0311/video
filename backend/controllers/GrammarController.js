const {
    getGrammarListService,
    getGrammarHtmlService,
  } = require('../services/GrammarService');
  
  exports.getGrammarList = async (req, res, next) => {
    try {
      const grammarList = await getGrammarListService();
      return res.status(200).json({ grammarList });
    } catch (error) {
      console.error('GET BLOG LIST ERROR: ', error);
      return res.status(500).json({ message: 'Lỗi dịch vụ, thử lại sau' });
    }
  };
  
  exports.getGrammarHtml = async (req, res, next) => {
    try {
      const { _id } = req.query;
      if (!Boolean(_id)) {
        return res.status(400).json({ message: 'id không hợp lệ' });
      }
  
      const grammarHtml = await getGrammarHtmlService(_id);
      return res.status(200).json({ grammarHtml });
    } catch (error) {
      console.error(' ERROR: ', error);
      return res.status(500).json({ message: 'Lỗi dịch vụ, thử lại sau' });
    }
  };
  