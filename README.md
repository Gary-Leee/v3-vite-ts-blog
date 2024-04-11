# v3-vite-ts-blog

框架：vuejs ^3.4.21
js解决方案：typescript ^5.2.2
css解决方案：sass ^1.72.0
ui组件库：element-plus ^2.6.1
状态管理方案：pinia ^2.0.11
路由管理方案：vue-router ^4.3.0
代码格式化：prettier ^3.2.5
代码检查：eslint ^8.57.0
打包工具/脚手架：vite ^5.1.6

## 安装依赖

```javascript
vue版本 git clone https://github.com/Gary-Leee/v3-vite-ts-blog.git
react版本 git clone https://github.com/Gary-Leee/vite-react-blog.git

npm i or pnpm i（推荐）

npm start or pnpm start
```

## 项目介绍

因为是纯前端项目，所以安装完依赖后可以直接部署在云服务器上当personal profile

vue版本 在线体验网址：[传送地址](http://garyleee.cool/ 'Gary leee')
react版本 在线体验网址：[传送地址](http://garyleee.cool/react 'Gary leee')

## 目录结构

```
├── public
│   ├── favicon.ico // 网站图标
│   └── index.html // 入口html文件
├── src
│   ├── assets // 静态资源
│   ├── components // 公共组件
│   ├── router // 路由
│   ├── store // 状态管理
│   ├── styles // 公共样式
│   └── utils // 工具函数
        └── directives // 自定义指令
│   ├── pages // 页面
│   ├── App.vue // 根组件
│   └── main.ts // 入口文件
├──  .gitignore // git忽略文件
├──  .eslintrc.cjs // eslint配置
├──  .prettierrc.cjs // 代码格式化配置
├──  auto-imports.d.ts // 自动导入
├──  components.d.ts // 组件声明
├──  package-lock.yaml // pnpm锁定文件
├──  package.json // 依赖管理
├──  README.md // 项目说明
├──  server.js // 服务器入口文件
├──  tsconfig.json // typescript配置
├──  tsconfig.node.json // node环境typescript配置
└──  vite.config.ts // vite配置
``` 

## 功能

- [x] 系统级换肤
- [x] 手动换肤
- [x] 左上角logo动画
- [x] 移动端适配
- [ ] 骨架屏
- [ ] 淡入动画
