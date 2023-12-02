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

> 📚 `front_blog`是基于`React`实现的一个前端博客，计划实现博客文章功能。当然目前还没写呢...

暂无

###### 项目初始化

> 🌋 推荐使用 pnpm 进行下载；

```shell
  git clone https://github.com/wxhsi/front_blog
  cd  front_blog
  pnpm install
  pnpm run dev:dev
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

- @babel/core 7.23.5 #<strong> babel </strong>编译的核心包
- @babel/preset-env 7.23.5 #<strong> babel </strong>编译的预设,可以转换目前最新的<strong> js </strong>标准语法
- @babel/preset-react 7.23.3 #识别<strong> jsx </strong>语法
- @babel/preset-typescript 7.23.3 #<strong> loader </strong>的预设,先将<strong> ts </strong>语法转换为<strong> js </strong>语法
- @pmmmwh/react-refresh-webpack-plugin 0.5.11 #该插件可以在不需要刷新浏览器的前提下模块热更新,并且能够保留<strong> react </strong>组件的状态。
- @types/react 18.2.39
- @types/react-dom 18.2.17
- autoprefixer 10.4.16
- babel-loader 9.1.3
- copy-webpack-plugin 11.0.0
- core-js 3.33.3 #使用低版本<strong> js </strong>语法模拟高版本的库,也就是垫片
- cross-env 7.0.3
- css-loader 6.8.1
- html-webpack-plugin 5.5.3
- less 4.2.0
- less-loader 11.1.3
- mini-css-extract-plugin 2.7.6
- postcss-loader 7.3.3
- react-refresh 0.14.0 #<strong> @pmmmwh/react-refresh-webpack-plugin </strong>插件的依赖
- speed-measure-webpack-plugin 1.5.0
- style-loader 3.3.3
- thread-loader 4.0.2
- typescript 5.3.2
- webpack 5.89.0
- webpack-bundle-analyzer 4.10.1
- webpack-cli 5.1.4
- webpack-dev-server 4.15.1
- webpack-merge 5.10.0

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
