<template>
  <div>
    <div class="top-bg">
      <div class="top-title" />
      <div class="top-time">更新时间:{{ time }}</div>
    </div>
    <div class="content">
      <ul v-if="songList.length != 0">
        <li
          v-for="(value,index) in songList"
          :key="value.id"
          class="music-list"
          @click="$router.push({ path: '/MusicPlayr', query: {id: value.id }})"
        >
          <div>{{ index+1 | filtersSum }}</div>
          <div>
            <div class="news_txt_top">{{ value.al.name }}</div>
            <div class="news_txt_bottom">
              <div />
              <div>{{ value.ar[0].name }} - {{ value.al.name }}</div>
            </div>
          </div>
          <div class=".news_icon">
            <van-icon name="play-circle-o" />
          </div>
        </li>
      </ul>
      <div v-else class="tips">暂无数据</div>
    </div>
  </div>
</template>
<script>
import { parseTime } from '@/utils/index';
import { getMusicTopList } from '@/api/api';
export default {
  name: 'HotTop',
  filters: {
    filtersSum(val) {
      return val < 10 ? `0${val}` : val;
    }
  },
  data() {
    return {
      time: parseTime(new Date(), '{m}月{d}日'),
      songList: []
    };
  },
  created() {
    // idx: 对象 key, 对应热歌榜
    const parasm = {
      idx: 1
    };
    getMusicTopList(parasm).then(res => {
      console.log('数据', res);

      this.songList = res.playlist.tracks;
    });
  }
};
</script>
<style lang="scss" scoped>
.top-bg {
  height: 146px;
  width: 100%;
  background-image: url(../../assets/hot_music_bg_2x.jpg);
  padding: 20px;
}
.top-title {
  width: 142px;
  height: 67px;
  background-position: -24px -30px;
  background-image: url(../../assets/hot_icon.png);
  background-size: 166px 97px;
}
.top-time {
  margin-top: 10px;
  color: #fff;
}
.content {
  ul {
    li {
      display: flex;
      position: relative;
      height: 60px;
      border-bottom: 1px solid #ccc;
      padding-right: 50px;
      > div:nth-of-type(1) {
        width: 40px;
        line-height: 60px;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        color: #999;
      }

      > div:nth-of-type(2) {
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
      > div:nth-of-type(3) {
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
    li:nth-child(-n+3) {
      >div:nth-of-type(1) {
        color: red;
      }
    }
  }
  .tips {
    padding-top: 100px;
    text-align: center;
  }
}
</style>
