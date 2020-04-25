<template>
  <div class="search-hot">
    <h3 class="title">热门搜索</h3>
    <div>
      <ul>
        <li v-for="item in hotList" :key="item.first" @click="$parent.searchMusic({keywords:item.first})">{{ item.first }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getSearchHot } from '@/api/api.js';

export default {
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

<style>

</style>
<style lang="scss" scoped>
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
