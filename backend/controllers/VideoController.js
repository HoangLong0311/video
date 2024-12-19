const {
    getVideoListService,
    getVideoHtmlService,
    addVideoService,
    deleteVideoService,
    getVideoListServiceAll
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
  exports.getVideoListAll = async (req, res, next) => {
    try {
      const videoList = await getVideoListServiceAll();
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

  exports.addVideo = async (req, res, next) => {
    try {
      const { title, desc, html } = req.body;
  
      if (!title || !desc || !html) {
        return res.status(400).json({ message: 'Dữ liệu không hợp lệ' });
      }
  
      const newVideo = await addVideoService({ title, desc, html });
      return res.status(201).json({ message: 'Thêm video thành công', video: newVideo });
    } catch (error) {
      console.error('ADD VIDEO ERROR: ', error);
      return res.status(500).json({ message: 'Lỗi dịch vụ, thử lại sau' });
    }
  };
  
  exports.deleteVideo = async (req, res, next) => {
    try {
      const { _id } = req.query;
  
      if (!Boolean(_id)) {
        return res.status(400).json({ message: 'ID không hợp lệ' });
      }
  
      const deletedVideo = await deleteVideoService(_id);
  
      if (!deletedVideo) {
        return res.status(404).json({ message: 'Video không tồn tại' });
      }
  
      return res.status(200).json({ message: 'Xóa video thành công', video: deletedVideo });
    } catch (error) {
      console.error('DELETE VIDEO ERROR: ', error);
      return res.status(500).json({ message: 'Lỗi dịch vụ, thử lại sau' });
    }
  };
  