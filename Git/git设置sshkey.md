#

## 配置 git 信息

```sh
git config --global  user.name "这里换上你的用户名"
git config --global user.email "这里换上你的邮箱"
```

## 生成 ssh key

```sh
ssh-keygen -t ed25519 -C "这里换上你的邮箱"
```

![](z_assets/Pasted%20image%2020230325200543.png)

## 复制 .pub 内容到 github

```sh
cat '存放地址'
```
