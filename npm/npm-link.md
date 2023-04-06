# npm link

在不发包的情况下，调试包

- 方式一

```zsh
cd path/to/my-package # 先切到引入项目路径下

npm link path/to/my-package-demo # 然后 link 被引入npm包的项目路径
```

- 方式二

```zsh
# 先去到模块目录，把它 link 到全局
cd path/to/my-package
npm link
# 再去项目目录通过包名来 link
cd path/to/my-package-demo
npm link my-package
```

- 方式三

```zsh
# 使用软链接
cd path/to/my-package-demo/node_modules
ln -s path/to/my-package my-package
```

解除 link

```zsh
npm unlink my-package
npm uninstall my-package -g
```
