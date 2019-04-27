import * as types from "./mutation-types";

const mutations = {
  // 推荐歌单
  [types.SET_SONGLIST](state, remdList) {
    state.remdList = remdList;
  }
};
export default mutations;
