# vue3 + vite + uni-app

## 环境

1. node v20.4.0 (Vue3/Vite版要求 node 版本^14.18.0 || >=16.0.0)
2. pnmp 8.6.9
3. vue ^3.2.45
4. vite 4.1.4

## 安装

1. `npx degit dcloudio/uni-preset-vue#vite leadway-mini`
2. `pnpm install`
3. uni-ui 依赖
   1. cli 项目默认是不编译 node_modules 下的组件的，导致条件编译等功能失效 ，导致组件异常

      ```vue.config.js
        module.exports = {
            transpileDependencies:['@dcloudio/uni-ui']
        }
      ```

   2. pnpm i sass -D
   3. pnpm i sass-loader@10.1.1 -D (如果 node 版本小于 16 ，sass-loader 请使用低于 @11.0.0 的版本，sass-loader@11.0.0 不支持 vue@2.6.12 如果 node 版本大于 16 ， sass-loader 建议使用 v8.x 版本)
   4. pnpm i @dcloudio/uni-ui
   5. 配置 easycom (uni-ui 现在只推荐使用 easycom ，如自己引用组件，可能会出现组件找不到的问题)

        ```pages.json
        {
            "easycom": {
                "autoscan": true,
                "custom": {
                    // uni-ui 规则如下配置
                    "^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"
                }
            },

            // 其他内容
            pages:[
                // ...
            ]
        }
        ```

4. 路径别名

    ```vue.config.js
    export default defineConfig({
        ...
        resolve: {
            alias: {
                '@': '/src',
                '@c': '/src/components',
                '@u': '/src/utils',
                '@s': '/src/service',
                '@a': '/src/assets',
                '@v': '/src/views',
                '@r': '/src/router',
                '@st': '/src/store',
            }
        },
    })
    ```
