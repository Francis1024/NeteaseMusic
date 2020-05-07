<template>
  <div class="song-menu">
    <div class="sm-head">
      <div class="sm-bg" />
      <div class="sm-head-l">
        <div>歌单</div>
        <div><img
          src="https://p1.music.126.net/CuAQHM8kOXvwFG5gqg8gEw==/109951164625116636.jpg?imageView=1&type=webp&thumbnail=252x0"
          alt=""
        ></div>
        <div>
          <van-icon name="play-circle-o" />
          <!-- {{ (value.playCount / 10000).toFixed() }} -->
          32
          万
        </div>
      </div>
      <div class="sm-head-r">
        <div class="sm-title">歌单名字</div>
        <div>
          <img
            src="https://p1.music.126.net/CuAQHM8kOXvwFG5gqg8gEw==/109951164625116636.jpg?imageView=1&type=webp&thumbnail=252x0"
            alt=""
          >
          <span>咚咚鱼</span>
        </div>
      </div>
    </div>
    <div class="sm-footer">
      <div class="sm-intro">
        <div>
          <span>标签:</span>
          <ul>
            <li>华语</li>
            <li>经典</li>
            <li>电子</li>
          </ul>
        </div>
        <div>
          <span>简介:</span>
          <p>咚咚的咚咚的那个哦等你给</p>
        </div>
      </div>
      <div>歌曲列表</div>
      <div>
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
        <div
          v-else
          class="tips"
        >暂无数据</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songList: []
    }
  }
}
</script>
<style lang="scss" scoped>
.sm-head {
  display: flex;
  padding: 20px;
}
.sm-head .sm-bg {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: url("https://p1.music.126.net/CuAQHM8kOXvwFG5gqg8gEw==/109951164625116636.jpg?imageView=1&type=webp&thumbnail=252x0");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  transform: scale(2);
  z-index: -1;
  filter: blur(20px);
}
.sm-head > .sm-head-l {
  position: relative;
  width: 126px;
  height: 126px;
  > div:nth-child(1) {
    position: absolute;
    z-index: 3;
    top: 10px;
    left: 0;
    padding: 0 8px;
    height: 17px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    line-height: 18px;
    background-color: rgba(217, 48, 48, 0.8);
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
  }
  > div:nth-child(2) {
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
  > div:nth-child(3) {
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
.sm-head > .sm-head-r {
  padding-left: 20px;
  .sm-title {
    font-size: 18px;
    color: #fff;
    padding: 18px 0;
  }
  > div:nth-child(2) {
    img {
      width: 30px;
      border-radius: 50%;
      vertical-align: middle;
    }
    span {
      padding-left: 6px;
      color: #fff;
      font-size: 14px;
    }
  }
}
.sm-footer {
  background-color: #fff;
  .sm-intro {
    padding: 10px;
    > div {
      display: flex;
      font-size: 14px;
      color: #666;
      span {
        padding-right: 6px;
      }
    }
    > div:nth-child(1) {
      margin-bottom: 4px;
      ul {
        li {
          font-size: 12px;
          display: inline-block;
          padding: 2px 6px;
          margin-right: 4px;
          text-align: center;
          border-radius: 25px;
          border: 1px solid #ccc;
        }
      }
    }
  }
  > div:nth-child(2) {
    height: 23px;
    line-height: 23px;
    padding: 0 10px;
    font-size: 12px;
    color: #666;
    background-color: #eeeff0;
  }
  > div:nth-child(3) {
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
              background: url("../assets/hot_icon.png") no-repeat;
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
    }
    .tips {
      padding: 200px 0;
      text-align: center;
    }
  }
}
</style>
