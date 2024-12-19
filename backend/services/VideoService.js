const VideoModel = require('../models/Video');

exports.getVideoListService = async () => {
  try {
    const videos = await VideoModel.find({}).select('-html');
    return videos;
  } catch (error) {
    throw error;
  }
};

exports.getVideoHtmlService = async (_id) => {
  try {
    if (!Boolean(_id)) return null;
    const { html = '' } = await VideoModel.findById(_id).select('-_id html');
    return html;
  } catch (error) {}
};
