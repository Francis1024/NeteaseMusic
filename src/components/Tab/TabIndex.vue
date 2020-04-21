<template>
  <div>
    <div class="rec">
      <div class="rec_title">
        <div>
          推荐歌单
        </div>
      </div>
      <div class="rec_content">
        <ul>
          <li v-for="value in remdList" :key="value.id">
            <div class="remd_li">
              <img :src="value.picUrl" :alt="value.name">
              <span>
                <van-icon name="play-circle-o" />
                {{ (value.playCount / 10000).toFixed() }}
                万
              </span>
            </div>
            <div class="remd_text">{{ value.name }}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="news_music">
      <div class="news_music_title">
        <div>
          最新音乐
        </div>
      </div>
      <SongsList :song-list="newSongList" />
    </div>
  </div>
</template>
<script>
import SongsList from '../SongsList/index';
import { mapActions, mapGetters } from 'vuex';
import { Toast } from 'vant';
export default {
  components: {
    SongsList
  },
  mounted() {
    this.getRemdSongList()
      .then(() => {
        Toast.clear();
      })
      .catch(() => {
        Toast.loading({
          duration: 0,
          // 持续展示 toast
          forbidClick: true,
          // 禁用背景点击
          loadingType: 'spinner'
        });
      });
    this.getNewSongList()
      .then(() => {
        Toast.clear();
      })
      .catch(() => {
        Toast.loading({
          duration: 0,
          // 持续展示 toast
          forbidClick: true,
          // 禁用背景点击
          loadingType: 'spinner'
        });
      });
  },
  methods: {
    ...mapActions(['getRemdSongList', 'getNewSongList'])
  },
  computed: { ...mapGetters(['remdList', 'newSongList']) }
};
</script>

<style lang="scss" scoped>
.rec {
  .rec_title {
    padding: 20px 0;
    > div {
      height: 18px;
      line-height: 18px;
      border-left: 2px solid #c4483b;
      border-top: 2px solid transparent;
      padding-left: 10px;
      font-size: 16px;
    }
  }
  .rec_content {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 33.33%;
        padding: 0 2px;
        .remd_li {
          position: relative;
          img {
            border-radius: 6px;
            width: 100%;
          }
          > span {
            color: aliceblue;
            font-size: 12px;
            position: absolute;
            right: 4px;
            top: 2px;
            height: 20px;
            line-height: 20px;

            display: flex;
            > i {
              padding-right: 2px;
              display: block;
              line-height: 18px;
            }
          }
        }
      }
    }
  }
}
.news_music {
  .news_music_title {
    padding: 20px 0;
    > div {
      height: 18px;
      line-height: 18px;
      border-left: 2px solid #c4483b;
      border-top: 2px solid transparent;
      padding-left: 10px;
      font-size: 16px;
    }
  }
}
</style>
