<template>
  <div class="song-menu">
    <div class="sm-head">
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
      <div class="sm-head-r" />
    </div>
    <div class="sm-footer">
      底部
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
.sm-head {
  padding: 20px;
  background-color: pink;
}
.song-menu > .sm-head > .sm-head-l {
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
</style>
