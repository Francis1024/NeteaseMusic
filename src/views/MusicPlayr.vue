<template>
  <div class="music_playr">
    <div
      ref="song-bg"
      class="song-bg"
      :style="{backgroundImage:`url(${songInfo.picUrl})`,opacity:songInfo.picUrl?'1':'0'}"
    />
    <div class="song-set" @click="handleSong">
      <van-icon v-show="playBtnShow" name="play-circle-o" />
      <div ref="setSong" class="song-set-btn">
        <img :src="songInfo.picUrl" :alt="songInfo.name">
      </div>
    </div>
    <audio
      v-show="false"
      ref="setAudio"
      class="audio"
      :src="currentMusicUrl"
      controls
      autoplay
    >您的浏览器太老了不支持audio 标签</audio>
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
      playBtnShow: false,
      songInfo: {
        picUrl: '',
        name: ''
      }
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
    handleSong() {
      this.$nextTick(() => {
        if (this.$refs.setAudio.paused) {
          this.$refs.setSong.style.animationPlayState = 'running'
          this.playBtnShow = false
          this.$refs.setAudio.play()
        } else {
          this.$refs.setSong.style.animationPlayState = 'paused'
          this.playBtnShow = true
          this.$refs.setAudio.pause()
        }
      }

      );
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
    transition: opacity 0.3s linear;
    z-index: -1;
    filter: blur(16px);
  }
  .song-set {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    i {
      position: absolute;
      top: 50%;
      font-size: 1.33333rem;
      z-index: 1;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
    }
    .song-set-btn {
      animation: circle 3s infinite linear;
      img {
        display: block;
        margin: 0px auto;
        width: 200px;
        border-radius: 50%;
      }
    }
    @keyframes circle {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
