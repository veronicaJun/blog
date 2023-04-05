# tree

## 安装

```sh
brew install tree
```

## 常用命令

* 查看帮助 tree --help
* 指定层级 tree -L 2
* 显示目录名称而非内容 tree -d "src"
* 不显示符合范本样式的文件或目录名称 tree -I "node_modules"
* 不显示符合范本样式的文件或目录名称 tree -I "node_modules|tests"
* 写入指定文件，如果文件不存在自动创建，如果存在则覆盖内容 tree -I "node_modules|test*|LICENSE|README.en.md" -L 2 > README.md
