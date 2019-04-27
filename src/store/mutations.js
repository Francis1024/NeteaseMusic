import * as types from "./mutation-types";

const mutations = {
  // 推荐歌单
  [types.SET_REMDLIST](state, remdList) {
    state.remdList = remdList;
  },
  // 最新音乐
  [types.SET_NEWSONGLIST](state, newSongList) {
    state.newSongList = newSongList;
    console.log(newSongList);
  }
};
export default mutations;
