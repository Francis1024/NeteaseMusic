<template>
  <div class="home_top">
    <div class="top">
      <img src="./logo.svg" alt="logo">
    </div>
    <div class="bottom">
      <van-tabs v-model="active" animated>
        <van-tab v-for="value in tabName" :key="value.id" :title="value.title">
          <component :is="value.component" keep-alive />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import TabIndex from '@/components/Tab/TabIndex.vue';
import TabRank from '@/components/Tab/TabRank.vue';
import TabSearch from '@/components/Tab/TabSearch.vue';
export default {
  components: { TabIndex, TabRank, TabSearch },
  data() {
    return {
      active: 0,
      tabName: [
        { component: 'TabIndex', id: 0, title: '推荐音乐' },
        { component: 'TabRank', id: 1, title: '热歌榜' },
        { component: 'TabSearch', id: 2, title: '搜索' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.home_top {
  .top {
    height: 64px;
    padding: 0 20px;
    display: flex;

    align-items: center;
    background-color: #c4483b;
    > img {
      width: 142px;
      height: 26px;
      overflow: hidden;
    }
  }
  .bottom {
    height: 44px;
    background: #000;
  }
}
</style>
