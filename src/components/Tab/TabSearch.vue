<template>
  <div>
    <div class="search-bar">
      <form>
        <div class="inputcover">
          <van-icon name="search" />
          <input type="text" placeholder="搜索歌曲、歌手、专辑">
          <label />
        </div>
      </form>
    </div>
    <div class="search-hot">
      <h3 class="title">热门搜索</h3>
      <div>
        <ul>
          <li v-for="item in hotList" :key="item.first">{{ item.first }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getSearchHot } from '@/api/api.js';
export default {
  name: 'SearchHot',
  data() {
    return {
      hotList: []
    }
  },
  created() {
    getSearchHot().then(res => {
      this.hotList = res.result.hots
    })
  }
}
</script>
<style lang="scss" scoped>
.search-bar {
  height: 60px;
  border-bottom: 1px solid #f3f2f2;
  form {
    padding: 16px 10px;
    color: #666;
    .inputcover {
      position: relative;
      width: 100%;
      height: 30px;
      padding: 0 30px;
      box-sizing: border-box;
      background: #ebecec;
      border-radius: 30px;
      .van-icon {
        position: absolute;
        left: 0;
        top: 7px;
        margin: 0 8px;
        font-size: 16px;
        vertical-align: middle;
      }
      input {
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        background: #ebecec;
        border: none;
        font-weight: 500;
      }
    }
  }
}
.search-hot {
  padding: 10px 6px;
  .title {
    color: #666;
  }
  >div {
    ul {
      li {
        display: inline-block;
        height: 32px;
        line-height: 32px;
        border-radius: 16px;
        border: 1px solid #ccc;
        padding: 0 10px;
        font-size: 14px;
        text-align: center;
        margin: 6px;
      }
    }
  }
}
</style>
