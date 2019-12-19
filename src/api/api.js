// 引入axios
import axios from "axios";

// 获取推荐歌单
export const getRemdSongList = () => {
  return axios.get("/personalized").then(res => {
    return res.data;
  });
};
// 获取最新歌曲
export const getNewSongList = () => {
  return axios.get("/personalized/newsong").then(res => {
    return res.data;
  });
};
// 获取歌曲地址
export const getMusicUrl = id => {
  return axios.get(`/song/url?id=${id}`).then(res => {
    return res.data;
  });
};
