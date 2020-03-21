module.exports = {
  devServer: {
    proxy: {
      "/api": {
        //需要代理的接口，一般会加前缀来区分
        target: "https://music.ztyuu.com", // 接口域名
        changeOrigin: true //是否跨域
      }
    }
  },

  // 将构建好的文件输出到哪里
  outputDir: "dist"
};
