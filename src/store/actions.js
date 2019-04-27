import { getRemdSongList } from "@/api/api";

const actions = {
  // 推荐歌单
  remdSongList({ commit }) {
    return getRemdSongList().then(res => {
      console.log("推荐歌单数据", res);
      if (res.code === 200) {
        commit("SET_SONGLIST", res.result);
      } else {
        return false;
      }
    });
  }
};
export default actions;
