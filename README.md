## 简介

vue-element-system 是一个后台前端解决方案,它使用了最新的前端技术栈、动态路由，权限验证，并且有着丰富的组件,企业级中后台解决方案，可免费商用，同时支持PC、平板、手机，请大家帮忙点个start,欢迎大家一起共同建设和维护

# Vue 3 + TypeScript + Vite3

yarn install 或者 npm install
yarn dev

# dependencies 安装的依赖  

axios  echarts  element-plus nprogress  pinia  pinia-plugin-persistedstate  vue-i18n  vue-router

# 相关图片

#### 1、登录页

![banner](https://i.postimg.cc/k4RQQFg4/1673491247305.png)

#### 2、首页

![banner](https://i.postimg.cc/jS8VmxLZ/1673790842186.png)

#### 3、功能栏

![banner](https://i.postimg.cc/FFdvSfbB/1673491327383.png)

#### 4、表格页

![banner](https://i.postimg.cc/MKSLGX9R/1673491365805.png)

#### 5.锁屏功能 设置了屏幕不操作 30 分钟锁屏和手动锁屏功能

![lockScreen](https://i.postimg.cc/28BqJyps/image.png)

### 文件资源目录 📚

```text
Geeker-Admin
├─ .vscode                # vscode推荐配置
├─ public                 # 静态资源文件（忽略打包）
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ directives          # 全局指令文件
│  ├─ enums               # 项目枚举
│  ├─ hooks               # 常用 Hooks
│  ├─ language            # 语言国际化
│  ├─ layout              # 框架布局
│  ├─ routers             # 路由管理
│  ├─ store               # pinia store
│  ├─ styles              # 全局样式
│  ├─ typings             # 全局 ts 声明
│  ├─ utils               # 工具库
│  ├─ views               # 项目所有页面
│  ├─ App.vue             # 入口页面
│  ├─ env.d.ts            # ts 识别 vue 文件
│  └─ main.ts             # 入口文件
├─ .editorconfig          # 编辑器配置（格式化）
├─ .env                   # vite 常用配置
├─ .env.development       # 开发环境配置
├─ .env.production        # 生产环境配置
├─ .env.test              # 测试环境配置
├─ .eslintignore          # 忽略 Eslint 校验
├─ .eslintrc.js           # Eslint 校验配置
├─ .gitignore             # git 提交忽略
├─ .prettierignore        # 忽略 prettier 格式化
├─ .prettierrc.js         # prettier 配置
├─ .stylelintignore       # 忽略 stylelint 格式化
├─ .stylelintrc.js        # stylelint 样式格式化配置
├─ CHANGELOG.md           # 项目更新日志
├─ commitlint.config.js   # git 提交规范配置
├─ index.html             # 入口 html
├─ LICENSE                # 开源协议文件
├─ lint-staged.config     # lint-staged 配置文件
├─ package-lock.json      # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ postcss.config.js      # postcss 配置
├─ README.md              # README 介绍
├─ STANDARD.md            # 项目编码规范说明书
├─ tsconfig.json          # typescript 全局配置
└─ vite.config.ts         # vite 配置
```

### 配置文件 📚

 "scripts": {
    "dev": "vite",   //npm run dev  或yarn dev
    "build": "vue-tsc && vite build", // 打包
    "preview": "vite preview"
  },
  "dependencies": {
    "@element-plus/icons-vue": "^2.0.10",
    "@vueuse/core": "^8.0.1",
    "@wangeditor/editor": "^5.1.12",
    "@wangeditor/editor-for-vue": "^5.1.12",
    "axios": "^1.2.1",
    "echarts": "^5.3.0",
    "echarts-liquidfill": "^3.1.0",
    "element-plus": "^2.2.27",
    "js-md5": "^0.7.3",
    "lottie-web": "^5.10.1",
    "mitt": "^3.0.0",
    "nprogress": "^0.2.0",
    "pinia": "^2.0.28",
    "pinia-plugin-persistedstate": "^3.0.1",
    "print-js": "^1.6.0",
    "qs": "^6.11.0",
    "sortablejs": "^1.15.0",
    "vue": "^3.2.45",
    "vue-i18n": "^9.1.9",
    "vue-router": "^4.1.6",
    "vue3-seamless-scroll": "^1.2.0",
    "vuedraggable": "^4.1.0"
  },
  "devDependencies": {
    "@types/node": "^17.0.31",
    "@types/sortablejs": "^1.15.0",
    "@vitejs/plugin-vue": "^4.0.0",
    "@vitejs/plugin-vue-jsx": "^1.3.10",
    "autoprefixer": "^10.4.7",
    "postcss": "^8.4.14",
    "postcss-html": "^1.4.1",
    "rollup-plugin-visualizer": "^5.5.4",
    "sass": "^1.49.7",
    "typescript": "^4.5.4",
    "unplugin-auto-import": "^0.12.1",
    "unplugin-vue-components": "^0.22.12",
    "vite": "^4.0.4",
    "vite-plugin-cdn-import": "^0.3.5",
    "vite-plugin-compression": "^0.5.1",
    "vite-plugin-html": "^3.2.0",
    "vite-plugin-svg-icons": "^2.0.1",
    "vite-plugin-vue-setup-extend": "^0.4.0",
    "vue-tsc": "^1.0.22"
  }
