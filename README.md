# vue3-main

# 问题

  操作在public/index.html 注释打开后出现的问题 ； 未打开则正常

 第三方库  monaco 代码编辑器 体量过大 16m以上 目前 通过 CDN 外部引入

    问题： 注释后 可以正常加载 子应用 localhost:5555  
          一旦打开 script src="<%= VUE_APP_CDN_PATH %>monaco-editor/min/vs/loader.js"></script
          则主应用捕获监听不到 子应用的 生命周期 报错   子应用可以正常加载进来 并生成dom节点

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
