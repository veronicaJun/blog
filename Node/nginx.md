# nginx

## 常用命令

1. 安装  brew install nginx

    ```sh
        Docroot is: /opt/homebrew/var/www

        The default port has been set in /opt/homebrew/etc/nginx/nginx.conf to 8080 so that
        nginx can run without sudo.

        nginx will load all files in /opt/homebrew/etc/nginx/servers/.

        To restart nginx after an upgrade:
        brew services restart nginx
        Or, if you don't want/need a background service you can just run:
        /opt/homebrew/opt/nginx/bin/nginx -g daemon off;
        ==> Summary
        🍺  /opt/homebrew/Cellar/nginx/1.23.4: 26 files, 2.2MB
    ```

2. 启动服务
   1. nginx
   2. brew services start nginx
3. 重新启动
   1. nginx -s reload
   2. brew services restart nginx
4. 查看配置
   1. brew info nginx
   2. cat /opt/homebrew/etc/nginx/nginx.conf
   3. sudo open /opt/homebrew/etc/nginx/nginx.conf -a 'sublime text'（使用编辑器sublime打开）
5. 检查配置是否正确
   1. nginx -t
6. 关闭服务
   1. nginx -s stop
   2. brew services stop nginx
   3. kill -QUIT 72 (从容的停止，即不会立刻停止)
   4. Kill -TERM 72 （立刻停止）
   5. Kill -INT 72 （和上面一样，也是立刻停止）
   6. kill -9 pid 杀死进程
7. 查看是否启动
   1. ps -ef|grep nginx

## 常见的配置

nginx的配置文件路径：/opt/homebrew/etc/nginx/nginx.conf
nginx的服务器默认路径：/usr/local/var/www
nginx的安装路径：/opt/homebrew/Cellar/nginx/1.23.4
