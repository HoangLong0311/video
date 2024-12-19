const VideoModel = require('../models/Video');

exports.getVideoListService = async () => {
  try {
    const videos = await VideoModel.find({}).select('-html');
    return videos;
  } catch (error) {
    throw error;
  }
};

exports.getVideoListServiceAll = async () => {
  try {
    const videos = await VideoModel.find({});
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

exports.addVideoService = async (videoData) => {
  try {
    const newVideo = new VideoModel(videoData);
    await newVideo.save();
    return newVideo;
  } catch (error) {
    throw error;
  }
};

exports.deleteVideoService = async (_id) => {
  try {
    if (!Boolean(_id)) return null;
    const deletedVideo = await VideoModel.findByIdAndDelete(_id);
    return deletedVideo;
  } catch (error) {
    throw error;
  }
};

