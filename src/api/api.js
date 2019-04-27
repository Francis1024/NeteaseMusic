// 引入axios
import axios from "axios";
// 配置基准路径;
const baseURL = "http://liujiangdu.top:3000";
// 设置默认的基准路径;
axios.defaults.baseURL = baseURL;
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
