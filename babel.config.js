// 为了避免webpack配置文件过于庞大,
// 可以把babel-loader的配置抽离出来,
// 新建babel.config.js文件,使用js作为配置文件,
// 是因为可以访问到process.env.NODE_ENV环境变量来区分是开发还是打包模式。

const isDEV = process.env.NODE_ENV === "development"; // 是否是开发模式
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // 设置兼容目标浏览器版本,这里可以不写,babel-loader会自动寻找上面配置好的文件.browserslistrc
        // "targets": {
        //  "chrome": 35,
        //  "ie": 9
        // },
        useBuiltIns: "usage", // 根据配置的浏览器兼容,以及代码中使用到的api进行引入polyfill按需添加
        corejs: 3, // 配置使用core-js低版本
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  //   babel-loader配置react-refesh刷新插件
  plugins: [
    isDEV && require.resolve("react-refresh/babel"), // 如果是开发模式,就启动react热更新插件
    // ...
  ].filter(Boolean), // 过滤空值
};
