# brew命令

## 本地软件库列表

```sh
brew ls
```

## 查找软件

```sh
brew search google（其中google替换为要查找的关键字）
```

## 查看brew版本

```sh
brew -v
```
## 查看安装地址
```shll
brew info maven
```

## 更新brew版本

```sh
brew update
```

## 安装cask软件

```sh
brew install --cask 
```

## 查看 brew.git 当前源

```sh
cd "$(brew --repo)" && git remote -v
```

## 查看 homebrew-core.git 当前源

```sh
cd "$(brew --repo homebrew/core)" && git remote -v
```

## 换源

### 修改环境变量

```sh
export HOMEBREW_BREW_GIT_REMOTE="https://github.com/Homebrew/brew.git"
export HOMEBREW_CORE_GIT_REMOTE="https://github.com/Homebrew/homebrew-core.git"
export HOMEBREW_BOTTLE_DOMAIN="https://github.com/Homebrew/homebrew-bottles"
```

### 修改源

```sh
git -C "$(brew --repo)" remote set-url origin https://github.com/Homebrew/brew.git
git -C "$(brew --repo homebrew/core)" remote set-url origin https://github.com/Homebrew/homebrew-core.git
git -C "$(brew --repo homebrew/cask)" remote set-url origin https://github.com/Homebrew/homebrew-cask.git
git -C "$(brew --repo homebrew/cask-fonts)" remote set-url origin https://github.com/Homebrew/homebrew-cask-fonts.git
git -C "$(brew --repo homebrew/cask-drivers)" remote set-url origin https://github.com/Homebrew/homebrew-cask-drivers.git
git -C "$(brew --repo homebrew/cask-versions)" remote set-url origin https://github.com/Homebrew/homebrew-cask-versions.git
```

### 更新

```sh
brew update-reset
```

## 各大镜像源

### 阿里

<https://mirrors.aliyun.com/homebrew/>

### 清华

<https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/>

### 中科大

<https://mirrors.ustc.edu.cn/>

### 官方

<https://github.com/Homebrew/>

```sh
export HOMEBREW_BREW_GIT_REMOTE="http://mirrors.aliyun.com/homebrew/brew.git"
export HOMEBREW_CORE_GIT_REMOTE="http://mirrors.aliyun.com/homebrew/homebrew-core.git"
export HOMEBREW_BOTTLE_DOMAIN="http://mirrors.aliyun.com/homebrew/homebrew-bottles"

git -C "$(brew --repo)" remote set-url origin http://mirrors.aliyun.com/homebrew/brew.git
git -C "$(brew --repo homebrew/core)" remote set-url origin http://mirrors.aliyun.com/homebrew/homebrew-core.git
git -C "$(brew --repo homebrew/cask)" remote set-url origin http://mirrors.aliyun.com/homebrew/homebrew-cask.git
git -C "$(brew --repo homebrew/cask-fonts)" remote set-url origin http://mirrors.aliyun.com/homebrew/homebrew-cask-fonts.git
git -C "$(brew --repo homebrew/cask-drivers)" remote set-url origin http://mirrors.aliyun.com/homebrew/homebrew-cask-drivers.git
git -C "$(brew --repo homebrew/cask-versions)" remote set-url origin http://mirrors.aliyun.com/homebrew/homebrew-cask-versions.git
```
