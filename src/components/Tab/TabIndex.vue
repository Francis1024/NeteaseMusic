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
              <img :src="value.picUrl" :alt="value.name" />
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
      <div class="news_music_centent">
        <ul>
          <li
            v-for="value in newSongList"
            :key="value.id"
            @click="getMusicUrl(value.id)"
          >
            <div>
              <div class="news_txt_top">{{ value.name }}</div>
              <div class="news_txt_bottom">
                <div></div>
                <div>{{ value.song.artists[0].name }} - {{ value.name }}</div>
              </div>
            </div>
            <div class=".news_icon">
              <van-icon name="play-circle-o" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { Toast } from "vant";
export default {
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
          loadingType: "spinner"
        });
      });
    this.getNewSongList()
      .then(() => {
        Toast.clear();
      })
      .catch(() => {
        Toast.loading({
          duration: 0,
          //持续展示 toast
          forbidClick: true,
          // 禁用背景点击
          loadingType: "spinner"
        });
      });
  },
  methods: {
    ...mapActions(["getRemdSongList", "getNewSongList", "getMusicUrl"])
  },
  computed: { ...mapGetters(["remdList", "newSongList"]) }
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
  .news_music_centent {
    ul {
      padding-left: 6px;
      li {
        position: relative;
        height: 60px;
        border-bottom: 1px solid #ccc;
        padding-left: 4px;
        padding-right: 50px;
        > div:nth-of-type(1) {
          padding-top: 8px;
          .news_txt_top {
            font-size: 17px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-break: normal;
            color: #000;
            padding-bottom: 2px;
          }
          .news_txt_bottom {
            display: flex;
            align-items: center;
            > div:nth-of-type(1) {
              display: inline-block;
              width: 12px;
              height: 8px;
              margin-right: 4px;
              background: url("../../assets/hot_icon.png") no-repeat;
              background-size: 166px 97px;
            }
            > div:nth-of-type(2) {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-break: normal;
            }
          }
        }
        > div:nth-of-type(2) {
          position: absolute;
          top: 50%;
          right: 8px;
          transform: translate(0, -50%);
          > i {
            font-size: 30px;
            color: #ccc;
          }
        }
      }
    }
  }
}
</style>
