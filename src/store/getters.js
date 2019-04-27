const getters = {
  // 截取6条歌单数据
  remdList: state => {
    return state.remdList.slice(0, 6);
  },
  // 获取最新歌曲列表
  newSongList: state => {
    return state.newSongList;
  }
};
export default getters;
