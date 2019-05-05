import { getRemdSongList, getNewSongList, getMusicUrl } from "@/api/api";

const actions = {
  // 推荐歌单
  getRemdSongList({ commit }) {
    return new Promise((resolve, reject) => {
      getRemdSongList().then(res => {
        console.log("推荐歌单数据", res);
        if (res.code === 200) {
          commit("SET_REMDLIST", res.result);
          resolve();
        } else {
          reject();
        }
      });
    });
  },
  getNewSongList({ commit }) {
    return new Promise((resolve, reject) => {
      getNewSongList().then(res => {
        console.log("最新歌曲数据", res);
        if (res.code === 200) {
          commit("SET_NEWSONGLIST", res.result);
          resolve();
        } else {
          reject();
        }
      });
    });
  },
  getMusicUrl({ commit }, id) {
    return new Promise((resolve, reject) => {
      getMusicUrl(id).then(res => {
        console.log("当前歌曲数据", res);
        if (res.code === 200) {
          commit("SET_MUSICURL", res.data[0]);
          resolve();
        } else {
          reject();
        }
      });
    });
  }
};
export default actions;
