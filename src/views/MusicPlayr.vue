<template>
  <div class="music_playr">
    <audio class="audio" :src="currentMusicUrl" controls autoplay>
      您的浏览器太老了不支持audio 标签
    </audio>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      musicId: this.$route.query.id
    }
  },
  computed: {
    ...mapState(['currentMusicUrl'])
  },
  created() {
    this.getMusicUrl(this.musicId)
  },

  methods: {
    ...mapActions(['getMusicUrl'])
  }
};
</script>
<style lang="scss" scoped>
.music_playr {
  position: relative;
  .audio {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 54px;
  }
}
</style>
