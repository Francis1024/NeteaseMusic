<template>
  <div class="search-bar">
    <form @submit.prevent="onSubmit">
      <div class="inputcover">
        <van-icon name="search" />
        <input v-model="text" type="text" placeholder="搜索歌曲、歌手、专辑">
        <label />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    keyword: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      text: ''
    }
  },
  watch: {
    keyword: function(newVal) {
      this.text = newVal
    }
  },
  methods: {
    onSubmit() {
      if (!this.text.trim()) {
        this.$toast('输入框不能为空');
        return
      }
      const params = {
        keywords: this.text.trim()
      }
      this.$parent.searchMusic(params)
    }
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
</style>
