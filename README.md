# Nuxt 3 Init Template

> 一个用于基础项目初始化的 [Nuxt](https://nuxtjs.org) 模板。

## 开始

安装依赖:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## 开发

Start the development server on http://localhost:3000

```bash
npm run dev
```

## 生产

构建用于生产的应用程序:

```bash
npm run build
```

本地预览生产构建:

```bash
npm run preview
```

查看官方 [部署文档](https://nuxt.com/docs/getting-started/deployment)

## 环境变量（.env）

- `.env`文件用于保存开发环境的环境变量
- `.env.production`文件用于保存生产环境的环境变量

## ESLint

> `JS`代码格式化规范，用于代码运行时语法检查和代码质量评估。

[VSCode](https://code.visualstudio.com/) 插件: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

> VSCode配置

```json
// .vscode/settings.json

{
  "editor.codeActionsOnSave": {
    "source.fixAll": false,
    "source.fixAll.eslint": true
  }
}
```

> 规则配置
```js
//.eslintrc.js

module.exports = {
  rules: {
    // ...
  }
}
```

## Stylelint

> `css`样式格式化规范，用于代码运行时语法检查和代码质量评估。

[VSCode](https://code.visualstudio.com/) 插件: [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

```js
// .stylelintrc.js

module.exports = {
  rules: {
    // ...
  }
}
```
