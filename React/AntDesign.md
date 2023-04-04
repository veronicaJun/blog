# Ant Design

- 官网: <https://ant.design/index-cn>
- Github: <https://github.com/ant-design/ant-design/>

## 使用

### antd的按需引入+自定主题([新版](https://ant.design/docs/react/use-with-create-react-app-cn))

已废弃

   1. 安装依赖：`yarn add react-app-rewired customize-cra babel-plugin-import less less-loader`
        - react-app-rewired
        - customize-cra
        - babel-plugin-import
        - less less-loader

   2. 修改`package.json`

     ```json
      "scripts": {
       "start": "react-app-rewired start",
       "build": "react-app-rewired build",
       "test": "react-app-rewired test",
       "eject": "react-scripts eject"
      }
     ```

   3. 根目录下创建`config-overrides.js`

    ```js
     //配置具体的修改规则
     const { override, fixBabelImports,addLessLoader} = require('customize-cra');
     module.exports = override(
      fixBabelImports('import', {
       libraryName: 'antd',
       libraryDirectory: 'es',
       style: true,
      }),
      addLessLoader({
       lessOptions:{
        javascriptEnabled: true,
        modifyVars: { '@primary-color': 'green' }, //修改主色调
       }
      }),
     );

     ```

    4. 备注：不用在组件里亲自引入样式了，即：`import 'antd/dist/antd.css'`应该删掉~~
