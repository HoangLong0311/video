const {
    getVideoListService,
    getVideoHtmlService,
  } = require('../services/VideoService');
  
  exports.getVideoList = async (req, res, next) => {
    try {
      const videoList = await getVideoListService();
      return res.status(200).json({ videoList });
    } catch (error) {
      console.error('GET BLOG LIST ERROR: ', error);
      return res.status(500).json({ message: 'Lỗi dịch vụ, thử lại sau' });
    }
  };
  
  exports.getVideoHtml = async (req, res, next) => {
    try {
      const { _id } = req.query;
      if (!Boolean(_id)) {
        return res.status(400).json({ message: 'id không hợp lệ' });
      }
  
      const videoHtml = await getVideoHtmlService(_id);
      return res.status(200).json({ videoHtml });
    } catch (error) {
      console.error(' ERROR: ', error);
      return res.status(500).json({ message: 'Lỗi dịch vụ, thử lại sau' });
    }
  };
  