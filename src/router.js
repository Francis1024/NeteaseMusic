import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// 路由懒加载
// const getComponent = name => () => import(`@/views/${name}.vue`);
export default new Router({
  mode: 'history',
  routes: [
    // 主页面
    {
      path: '/',
      component: () => import('@/views/Home')
    },
    // 歌单详情页面
    {
      path: '/songMenuDetail',
      component: () => import('@/views/SongMenu')
    },
    // 歌曲播放页面
    {
      path: '/MusicPlayr',
      component: () => import('@/views/MusicPlayr')
    },
    {
      path: '*',
      component: () => import('@/views/404')
    }
  ]
});
