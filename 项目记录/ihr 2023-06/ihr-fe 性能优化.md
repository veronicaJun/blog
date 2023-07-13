# iHR-FE 性能优化

## 技术栈

vue2
element-ui
axios

### 1. 计算打包时间

在 Vue2 项目中，可以使用 `npm-run-all` 和 `wait-on` 这两个工具来计算 `npm run dev` 命令启动项目所花费的时间。

具体步骤如下：

1. 安装 `npm-run-all` 和 `wait-on`：

    ```sh
    npm install npm-run-all wait-on --save-dev
    ```

2. 在 `package.json` 中添加以下脚本：

    ```json
    "dev": "npm run dev-env node build/dev-server.js",
    ```

    将原有 dev 改名，并移植到 dev:server 中

    ```json
    {
    "scripts": {
        "dev": "npm-run-all -p dev:*",
        "dev:server": "npm run dev-env node build/dev-server.js",
        "dev:wait": "wait-on http://localhost:8090",
        "dev:time": "node build/dev-time.js"
        }
    }
    ```

    在上面的代码中，我们添加了 `dev:wait` 和 `dev:time` 两个脚本，分别用于等待项目启动完成和计算启动时间。

3. 创建 `build/dev-time.js` 文件，添加以下代码：

    ```javascript
    const waitOn = require('wait-on');

    waitOn({ resources: ['http://localhost:8090'] }, function (err) {
    if (err) {
        console.error(err);
        return;
    }

    const time = new Date() - startTime;
        console.log(`Dev server started in ${time}ms`);
    });

    const startTime = new Date();
    ```

    在上面的代码中，我们使用 `wait-on` 等待项目启动完成，然后计算启动时间，并在命令行输出结果。

4. 运行以下命令，即可在命令行输出启动时间：

    ```sh
    npm run dev
    ```

    在上面的命令中，`npm run dev` 会同时启动 `dev:server` 和 `dev:wait` 两个脚本，等待项目启动完成后，再执行 `dev:time` 脚本，计算启动时间并输出结果。

5. 结果

    ```sh
    Time: 47376ms
    ```

    ```sh
    Time: 49669ms
    Built at: 2023/06/10 下午1:01:20
    ...
    Dev server started in 51024ms
    ```

### 2. 优化打包时间

对于 Vue2 项目，如果想要减少 `npm run dev` 的时间，可以尝试以下方法：

1. 启用缓存

在开发过程中，代码的变化通常只会影响到少量模块，因此开启缓存可以避免重新编译整个项目，减少编译时间。为了启用缓存，可以使用 `cache-loader` 插件和 `hard-source-webpack-plugin` 插件，具体步骤如下：

安装插件：

```
npm install cache-loader hard-source-webpack-plugin --save-dev
```

在 `webpack.config.js` 中添加如下代码：

```javascript
const CacheLoader = require("cache-loader");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'cache-loader'
          },
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      }
      // ...
    ]
  },
  plugins: [
    new HardSourceWebpackPlugin()
    // ...
  ]
};
```

在上面的例子中，我们在 `module.rules` 数组中配置了 `cache-loader` 和 `babel-loader`，用于缓存和编译 js 文件；并且在 `plugins` 数组中配置了 `hard-source-webpack-plugin`。

2. 使用开发服务器

在开发过程中，使用开发服务器可以实时观察代码变化，并自动刷新页面，从而节省打包时间。为了使用开发服务器，可以使用 `webpack-dev-server`，具体步骤如下：

安装插件：

```
npm install webpack-dev-server --save-dev
```

在 `package.json` 中添加如下代码：

```json
{
  "scripts": {
    "dev": "webpack-dev-server --mode development --config webpack.config.js",
    // ...
  }
}
```

在上面的例子中，我们配置了 `dev` 命令，用于启动开发服务器。在启动开发服务器时，可以通过 `--mode development` 参数指定模式为开发模式，从而使用开发配置文件；并通过 `--config` 参数指定配置文件路径。

3. 配置 watch

在开发过程中，通过开启文件监听，可以自动重新编译代码，从而减少手动编译的时间。为了开启文件监听，可以在 `webpack.config.js` 中配置 `watch`，具体步骤如下：

在 `webpack.config.js` 中添加如下代码：

```javascript
module.exports = {
  // ...
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 500
  }
};
```

在上面的例子中，我们使用了 `watch` 属性开启文件监听，使用 `watchOptions` 属性配置了一些选项。其中 `ignored` 配置用于忽略指定的目录，`aggregateTimeout` 配置用于设置等待文件更新的时间。

4. 升级 webpack

如果你使用的是比较老的 webpack 版本，可以考虑升级到最新版，从而提升性能。

综上所述，启用缓存、使用开发服务器、配置 watch、升级 webpack 版本都是提高开发效率和减少编译时间的有效方法。

```sh
Time: 78307ms
Dev server started in 79669ms
```