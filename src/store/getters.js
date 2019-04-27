const getters = {
  // 截取6条歌单数据
  remdList: state => {
    return state.remdList.slice(0, 6);
  }
};
export default getters;
