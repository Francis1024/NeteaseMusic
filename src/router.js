import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
// 路由懒加载
const getComponent = name => () => import(`./views/${name}.vue`);
export default new Router({
  mode: "history",
  routes: [
    // 主页面
    {
      path: "/",
      component: getComponent("Home")
    },
    // 歌单页面
    {
      path: "playlist/detail",
      components: getComponent("PlayList")
    }
  ]
});
