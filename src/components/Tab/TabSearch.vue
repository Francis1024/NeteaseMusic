<template>
  <div>
    <searchBar :keyword="keyword" />
    <searchHot />
    <div class="search-result">
      <h3 class="title">最佳匹配</h3>

      返回结果
    </div>
  </div>
</template>
<script>
import searchBar from './components/searchBar';
import searchHot from './components/searchHot';
import { getSearchMultimatch } from '@/api/api.js';
export default {
  name: 'SearchHot',
  components: {
    searchBar,
    searchHot
  },
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    getSearchMultimatch(params) {
      this.keyword = params.keywords
      getSearchMultimatch(params).then(res => {
      })
    }
  }

}
</script>
<style lang="scss" scoped>
.search-result {
  padding: 10px 6px;
  .title {
    color: #666;
  }
}
</style>
