# 2024_front_blog

✨ 自用前端 WebPack5 打包模板 ✨

<!-- 项目栏 -->

![github license](https://img.shields.io/github/license/wxhsi/front_blog)
![Watchers](https://img.shields.io/github/watchers/wxhsi/front_blog)
![Forks](https://img.shields.io/github/forks/wxhsi/front_blog)
![Stars](https://img.shields.io/github/stars/wxhsi/front_blog)
![wanyu](https://img.shields.io/badge/%F0%9F%8D%8A%E4%BD%9C%E8%80%85-wanyu-orange)

<br />

## 目录

- [上手指南](#上手指南)
  - [项目初始化](#项目初始化)
  - [技术选型](#技术选型)
- [文件目录说明](#文件目录说明)
- [内容 1](#内容一)
- [内容 2](#内容二)
- [内容 3](#内容三)
- [作者](#作者)
- [版权说明](#版权说明)

### 上手指南

> 📚 `webpack5_react18_ts-env`是`webpack5`搭建 react18+ts 开发和打包环境

reademe 后面内容是另一个项目的模板，可忽略

###### 项目初始化

> 🌋 推荐使用 pnpm 进行下载；

```shell
  git clone https://github.com/wxhsi/webpack5_react18_ts-env
  cd  webpack5_react18_ts-env
  pnpm install
  pnpm run build:dev
```

> 访问 Http://localhost:3000 进入项目

1. xxxxx x.x.x
2. xxxxx x.x.x
3. xxxxx x.x.x

###### **技术选型**

> 🏔 主要采用 react18+ts4 进行开发

- <strong>开发工具 IDE :</strong> [VsCode](https://code.visualstudio.com/)
- <strong>开发环境 :</strong> windows10，[nodejs v20.10.0](https://nodejs.org/en)
- <strong>生产环境 :</strong> ——————
- <strong>前端框架 :</strong> [React18 基于客户端渲染,SPA](https://zh-hans.react.dev/blog/2022/03/29/react-v18)
- <strong>服务端渲染框架 :</strong> 考虑后期客户端改服务端
- <strong>状态管理 :</strong> ——————
- <strong>UI 组件库 :</strong> [基于 ReactUI 框架:阿里 AntDesign,暂定](https://ant.design/components/overview-cn)
- <strong>自动化打包工具 :</strong> [WebPack5](https://webpack.docschina.org/blog/2020-10-10-webpack-5-release/)
- <strong>微信小程序 :</strong> ——————

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo

### 文件目录说明

> 📘 项目结构

```
filetree
├── build
|   ├── webpack.analy.js # 配置文件
|   ├── webpack.base.js # 公共配置
|   ├── webpack.dev.js  # 开发环境配置
|   └── webpack.prod.js # 打包环境配置
├── public
│   └── index.html # html模板
├── src
|   ├── assets # 资源文件
|   |   ├── fonts # 字体
|   |   └── imgs # 图片
|   ├── App.tsx
|   ├── images.d.ts # 图片的声明文件
│   └── index.tsx # react应用入口页面
├── .browserslistrc  #  辅助postcss-loader的需要兼容浏览器的清单
├── .gitattributes  #
├── babel.config.js  #  babel-loader的配置抽离文件
├── package.json  #  项目描述文件
├── pnpm-lock.yaml  #   pnpm 包管理器生成的锁定文件
├── postcss.config.js  #  postcss-loader的配置抽离文件
├── README.md #  项目手册和关于项目的一些东西
└── tsconfig.json  # ts配置



```

### 内容一

> 📕 内容 1 <strong>dev</strong>开头是开发模式,<strong>build</strong>开头是打包模式,冒号后面对应的<strong>dev/test/pre/prod</strong>是对应的业务环境的<strong>开发/测试/预测/正式</strong>环境。

- 运行<strong>pnpm run build:dev</strong>打包

```shell
pnpm run build:dev
```

- 借助<strong>serve -s dist</strong>启动后在浏览器查看

```shell
serve -s dist
```

### 内容二

> 📗 内容 2

dependencies:(生产环境)

- react 18.2.0
- react-dom 18.2.0
- scheduler 0.23.0

devDependencies:(开发环境)

- @babel/core 7.23.5 # <strong>babel</strong> 编译的核心包
- @babel/plugin-proposal-decorators 7.18.2
- @babel/plugin-transform-runtime 7.18.5
- @babel/preset-env 7.23.5 # <strong>babel</strong> 编译的预设,可以转换目前最新的<strong> js </strong>标准语法
- @babel/preset-react 7.23.3 # 识别 <strong>jsx</strong> 语法
- @babel/preset-typescript 7.23.3 # <strong>loader</strong> 的预设,先将 <strong>ts</strong> 语法转换为 <strong>js</strong> 语法
- @pmmmwh/react-refresh-webpack-plugin 0.5.11 # 该插件可以在不需要刷新浏览器的前提下模块热更新,并且能够保留 <strong>react</strong> 组件的状态。
- @types/react 18.2.39 # <strong>react</strong> 类型依赖
- @types/react-dom 18.2.17 # <strong>react</strong> 依赖
- autoprefixer 10.4.16 # 决定添加哪些浏览器前缀到 <strong>css</strong> 中
- babel-loader 9.1.3 # 使用 <strong>babel</strong> 加载最新 js 代码并将其转换为 <strong>ES5</strong>
- compression-webpack-plugin 10.0.0
- copy-webpack-plugin 11.0.0 # 打包的时候把 <strong>public</strong> 下静态资源内容复制到构建出口文件夹中
- core-js 3.33.3 # 使用低版本 <strong>js</strong> 语法模拟高版本的库,也就是垫片
- cross-env 7.0.3 #  兼容各系统的设置环境变量的包
- css-loader 6.8.1 #  解析 <strong>css</strong> 文件代码
- css-minimizer-webpack-plugin 4.0.0
- html-webpack-plugin 5.5.3 #  把最终构建好的静态资源都引入到一个 <strong>html</strong> 文件中
- less 4.2.0 # <strong>css</strong> 超集, <strong>less</strong> 核心
- less-loader 11.1.3 #  解析 <strong>less</strong> 文件代码,把 <strong>less</strong> 编译为 <strong>css</strong>
- mini-css-extract-plugin 2.7.6 # 打包模式抽离 <strong>css</strong>
- postcss 8.4.14
- postcss-loader 7.3.3 # 处理 <strong>css</strong> 时自动加前缀
- purgecss-webpack-plugin 4.1.3
- react-refresh 0.14.0 # <strong>@pmmmwh/react-refresh-webpack-plugin</strong> 插件的依赖
- speed-measure-webpack-plugin 1.5.0 # <strong>webpack</strong> 打包速度分析插件
- style-loader 3.3.3 #  把解析后的 <strong>css</strong> 代码从 <strong>js</strong> 中抽离,放到头部的 <strong>style</strong> 标签中(在运行时做的)
- thread-loader 4.0.2 #  开启多进程解析 <strong>loader</strong> ,可以极大地提升 <strong>loader</strong> 解析的速度
- typescript 5.3.2 # <strong>JavaScript</strong> 的超集
- webpack 5.89.0 # <strong>JavaScript</strong> 应用的静态模块化打包工具
- webpack-bundle-analyzer 4.10.1 #  分析 <strong>webpack</strong> 打包后文件的插件,使用交互式可缩放树形图可视化 <strong>webpack</strong> 输出文件的大小
- webpack-cli 5.1.4 # <strong>webpack</strong> 依赖
- webpack-dev-server 4.15.1 #  在开发环境启动服务器来辅助开发
- webpack-merge 5.10.0 #  合并基本配置

### 内容三

> 📙 内容 3

- [xxxxxxx]()
- [xxxxxxx]()
- [xxxxxxx]()

### 版本控制

> 🐸 版本控制

该项目使用 Git 进行版本管理。您可以在 repository 参看当前可用版本。

### 作者

> 🧚‍♀️ 作者

🍊🍊🍊

### 版权说明

> 👾 版权说明

🐶 暂无 😸
