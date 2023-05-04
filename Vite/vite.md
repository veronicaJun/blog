# vite

背景：

原因：项目越大，webpack 所需处理的 js 代码就越多
结果：
    1. 构建工具需要更长时间才能启动开发服务器
    2. HMR 需要更长时间才能完成
webpack为什么改变不了？
    webpack 支持多种模块化方案，需要统一模块化代码，需要把所有的问题都读一遍，这样就会导致构建速度变慢。
    vite 只支持 esm，不需要统一模块化代码，所以构建速度快。
    webapck 关注兼容性
    vite 关注浏览器端的开发体验
    webpack 要把所有依赖解析完，才能启动开发服务器
    vite 不需要解析所有依赖，只需要解析当前文件的依赖，所以启动开发服务器更快

yarn create vite （使用 vite 脚手架）

1. 全局安装 create-vite(vite 脚手架)
2. 运行 create-vite/bin 下的 执行配置

cli 帮我们制定了开发框架，并且提供了一些最佳的 webpack 配置

-D 代表开发依赖
-P 代表生产依赖

ESM导入，要么是绝对路径，要么是相对路径
    浏览器通过网络请求加载资源，会导致加载更多的模块

vite 处理过程中，遇到非绝对路径或非相对路径的模块，会进行模块路径补全。
找寻依赖的过程是自当前目录依次想想你上查找的过程，知道找到根目录或找到对应的依赖为止。

生产和开发
dev -> 每次依赖与构建
prod -> rollup 完成生产环境打包

依赖预构建
    找到对应的依赖，调用 esbuild，将其他规范转换为 esm 规范，放到 node_modules/.vite/deps 目录下，同时多 esm 规范的模块进行统一集成
    解决了：
        1. 第三方包不支持 esm
        2. 方便路径补全
        3. 网路多包传输的性能问题（esm 不支持 直接去 node_modules 目录下寻找依赖的原因）,预构建将多个依赖打包成一个文件，减少了网络请求的次数

vite.config.js === webpack.config.js

配置 - 语法提示
// 有语法提示的写法一：

```js
import { defineConfig } from 'vite'; // 引入defineConfig，可以获得语法提示（基于 TS）
export default defineConfig({
    optimizeDeps: {
        // exclude: ['lodash-es'],    // 不进行依赖预构建
    }
})

```

// 有语法提示的写法二：

```js
/**
 * @type {import('vite').UserConfig}
 */
const viteConfig = {
    optimizeDeps: {
        // exclude: ['lodash-es'],    // 不进行依赖预构建
    }
}
export default viteConfig;
```

配置 - 环境处理

```js
import { defineConfig } from 'vite';
import viteBaseConfig from './vite.base.config';
import viteDevConfig from './vite.dev.config';
import viteProdConfig from './vite.prod.config';

// 方法二（推荐）：策略模式
const envResolver = {
    "build": () => {
        console.log("生产环境");
        return ({ ...viteBaseConfig, ...viteProdConfig })
    },
    "serve": () => {
        console.log("开发环境");
        return Object.assign({}, viteBaseConfig, viteDevConfig)
    }
}

export default defineConfig(({ command, mode }) => {
    return envResolver[command]();
    // 方法一
    // if (command === 'build') {
    //     // 生产环境
    // } else {
    //     // 开发环境
    // }
})

```

## 配置 - 环境变量

环境变量：会根据当前的代码环境产生值的变化的变量。
基于 dotenv：dotenv 会将 .env 文件中的变量注入到 process 中，
需要在 vite.config.js 配置

- root：
- envDir: 指定 env 文件所在的目录

然后在代码中使用 process.env.VITE_APP_TITLE 获取变量值。

vite 可以手动调用 loadEnv 方法，获取 env 文件

```js
    /**
     * @param mode
     * @param envDir 当前 env 文件所在的目录，一般情况下，我们会将 env 文件放在项目根目录下，所有这里可以直接使用 process.cwd() 获取当前 node 进程的工作目录
     * @param prefixes env 文件内 key 的前缀，默认情况下只有前缀为 VITE_ 会被加载
     */
    const env = loadEnv(mode, process.cwd())
```

.env：所有环境都会加载的环境变量
.env.development：开发环境加载的环境变量
.env.production：生产环境加载的环境变量

// vite 默认 development 为开发环境， production 为生产环境
pn run dev --mode development === pn run dev

调用 loadEnv

1. 找到 .env 文件不解释，并解析其中的环境变量， 存入对象 1。
2. 将 mode 的值进行拼接 `.env.[mode]` => '.env.development'，然后解析该文件，存入对象 2
3. 返回对象 3 = {... 对象 1, ...对象 2}

伪代码表示

```js
    const env = {
        ...parse('.env'),
        ...parse(`.env.${mode}`)
    }
```
