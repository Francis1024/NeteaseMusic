const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        // 需要代理的接口，一般会加前缀来区分
        target: 'https://music.ztyuu.com', // 接口域名
        changeOrigin: true // 是否跨域
      }
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },

  // 将构建好的文件输出到哪里
  outputDir: 'dist'
};
