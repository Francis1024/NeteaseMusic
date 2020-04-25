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
// 获取音乐详情
export function getMusicDetail(id) {
  return request({
    url: '/song/detail',
    params: { ids: id }
  })
}

// 排行榜
// https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=排行榜
export function getMusicTopList(params) {
  return request({
    url: '/top/list',
    params
  })
}

// 热门搜索

export function getSearchHot() {
  return request({
    url: '/search/hot'
  })
}
