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
          <li></li>
        </ul>
      </div>
    </div>
    <div class="news_music">
      <div class="news_music_title">
        <div>
          最新音乐
        </div>
      </div>
    </div>
  </div>
</template>
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
