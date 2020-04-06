<template>
  <div class="songs-list">
    <ul v-if="songList.length != 0">
      <li
        v-for="value in songList"
        :key="value.id"
        @click="$router.push({path:'/MusicPlayr',query:{id:value.id}})"
      >
        <div>
          <div class="news_txt_top">{{ value.name }}</div>
          <div class="news_txt_bottom">
            <div />
            <div>{{ value.song.artists[0].name }} - {{ value.name }}</div>
          </div>
        </div>
        <div class=".news_icon">
          <van-icon name="play-circle-o" />
        </div>
      </li>
    </ul>
    <div v-else class="tips">暂无数据</div>
  </div>
</template>

<script>
export default {
  name: 'SongsList',
  props: {
    songList: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.songs-list {
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
  .tips {
    text-align: center;
  }
}
</style>
