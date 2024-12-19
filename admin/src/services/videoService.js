

import axiosClient from './axiosClient';

const URL = 'apis/video';

const videoApi = {
  getVideoList: () => {
    return axiosClient.get(`${URL}/video-list-all`);
  },

  getVideoHtml: (_id) => {
    return axiosClient.get(`${URL}/video-html`, { params: { _id } });
  },

  // Thêm một video mới
  addVideo: (videoData) => {
    return axiosClient.post(`${URL}/add-video`, videoData);
  },

  // Xóa một video theo ID
  deleteVideo: (_id) => {
    return axiosClient.delete(`${URL}/delete-video`, { params: { _id } });
  },
};

export default videoApi;
