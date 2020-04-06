<template>
  <div class="music_playr">
    <div ref="song-bg" class="song-bg" :style="{backgroundImage:`url(${songInfo.picUrl})`,opacity:songInfo.picUrl?'1':'0'}" />
    <div>
      内容部分
    </div>
    <audio v-show="false" class="audio" :src="currentMusicUrl" controls autoplay>您的浏览器太老了不支持audio 标签</audio>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { mapActions } from 'vuex';
import { getMusicDetail } from '@/api/api';
export default {
  data() {
    return {
      musicId: this.$route.query.id,
      songInfo: {}
    };
  },
  computed: {
    ...mapState(['currentMusicUrl'])
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      await this.getMusicUrl(this.musicId);
      await getMusicDetail(this.musicId).then(res => {
        this.songInfo = res.songs[0].al;
      });
    },
    ...mapActions(['getMusicUrl'])
  }
};
</script>
<style lang="scss" scoped>
.music_playr {
  .song-bg {
    position: fixed;
    left: 0;
    right: 0;
    top: -50px;
    height: 100%;
    background-color: #161824;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: auto 100%;
    transform-origin: center top;
    transform: scale(1.5);
    transition: opacity .3s linear;
    z-index: -1;
    filter:blur(16px);
  }
}
</style>
