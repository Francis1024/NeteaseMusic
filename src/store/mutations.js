import * as types from './mutation-types';

const mutations = {
  // 推荐歌单
  [types.SET_REMDLIST](state, remdList) {
    state.remdList = remdList;
  },
  // 最新音乐
  [types.SET_NEWSONGLIST](state, newSongList) {
    state.newSongList = newSongList;
  },
  // 音乐地址
  [types.SET_MUSICURL](state, currentMusicUrl) {
    console.log(state);
    console.log(currentMusicUrl.url);
    state.currentMusicUrl = currentMusicUrl.url;
  }
};
export default mutations;
