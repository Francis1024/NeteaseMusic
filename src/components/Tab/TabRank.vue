<template>
  <div>
    <div class="top-bg">
      <div class="top-title" />
      <div class="top-time">更新时间:{{ time }}</div>
    </div>
  </div>
</template>
<script>
import { parseTime } from '@/utils/index'
export default {
  name: 'HotTop',
  data() {
    return {
      time: parseTime(new Date(), '{m}月{d}日')
    }
  }
}
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
</style>
