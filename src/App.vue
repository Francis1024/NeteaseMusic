<template>
  <div id="app">
    <!-- 状态保持 -->
    <keep-alive>
      <router-view />
    </keep-alive>
    <music-playr class="mucis_play"></music-playr>
  </div>
</template>
<script>
import MusicPlayr from "@/components/MusicPlayr/MusicPlayr.vue";
export default {
  name: "app",
  components: {
    MusicPlayr
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: black;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
