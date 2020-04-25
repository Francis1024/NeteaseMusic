<template>
  <div>
    <searchBar :keyword="keyword" />
    <searchHot />
    <searchResult v-if="isShowSongsList" :song-list="songList" />
  </div>
</template>
<script>
import searchBar from './components/searchBar';
import searchHot from './components/searchHot';
import searchResult from './components/searchResult';
import { getSearchMultimatch, getSearchMusic } from '@/api/api.js';
export default {
  name: 'SearchHot',
  components: {
    searchBar,
    searchHot,
    searchResult
  },
  data() {
    return {
      keyword: '',
      songList: [],
      isShowSongsList: false
    }
  },
  methods: {
    searchMusic(params) {
      this.keyword = params.keywords
      Promise.all([this.getSearchMusic(params), this.getSearchMultimatch(params)]).then((values) => {
        console.log(values[0].result.songs);
        console.log(this);
        this.songList = values[0].result.songs
        this.isShowSongsList = true
      });
    },
    getSearchMusic(params) {
      return new Promise((resolve, reject) => {
        getSearchMusic(params).then(res => {
          resolve(res)
        })
      })
    },
    getSearchMultimatch(params) {
      return new Promise((resolve, reject) => {
        getSearchMultimatch(params).then(res => {
          resolve(res)
        })
      })
    }
  }

}
</script>

