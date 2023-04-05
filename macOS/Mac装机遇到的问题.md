# Mac 装机遇到的问题

## 允许安装任何软件

## 网络慢的问题

系统偏好设置-网络-高级-硬件-配置：手动-mtu：（最小的）

## 安装brew被墙

1. 打开 <https://www.ipaddress.com/> 输入访问不了的域名，获得对应的IP。
2. 在/etc/hosts中加一行 （格式：ip 域名）

```sh
199.232.28.133 raw.githubusercontent.com
```

## 关闭开机音乐

## 鼠标，触摸屏设置

## 触发角设置

## The file /Users/veronica/.zshrc does not exist

```sh
touch ~/.zshrc
```

## brew 每次都下载 formula.jws.json、cask.jws.json

关闭从API下载`export HOMEBREW_NO_INSTALL_FROM_API=true`
关闭自动更新`export HOMEBREW_NO_AUTO_UPDATE=true`

## Error: Command failed with exit 128: git

```sh
git config --global --add safe.directory /opt/homebrew/Library/Taps/homebrew/homebrew-cask

git config --global --add safe.directory /opt/homebrew/Library/Taps/homebrew/homebrew-core
```

## 打开任意来源文件

```sh
sudo spctl --master-disable
```


