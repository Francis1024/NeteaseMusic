// 引入axios
import request from '@/utils/request.js';
// 获取推荐歌单
export function getRemdSongList() {
  return request({
    url: '/personalized'
  })
}
// 获取最新歌曲
export function getNewSongList() {
  return request({
    url: '/personalized/newsong'
  })
}
// 获取歌曲地址
export function getMusicUrl(id) {
  return request({
    url: '/song/url',
    params: { id: id }
  })
}
