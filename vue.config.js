// module.exports = {
//   devServer: {
//     proxy: {
//       "/api": {
//         //需要代理的接口，一般会加前缀来区分，但我个人是没加，即‘/’都转发代理
//         target: "http://api.ztyuu.com/", // 接口域名
//         changeOrigin: true, //是否跨域
//         ws: false,
//         pathRewrite: {
//           [`^/`]: "" //需要rewrite的，针对上面的配置，是不需要的
//         }
//       }
//     }
//   },

//   // 将构建好的文件输出到哪里
//   outputDir: "dist"
// };
