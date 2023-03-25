# MongoDB 安装

1. 创建数据库文件夹

    ```sh
    sudo mkdir -p /usr/local/var/mongodb
    ```

2. 创建 log 文件夹

    ```sh
    sudo mkdir -p /usr/local/var/log/mongodb
    ```

3. 授权

    ```sh
    // Veronica 为电脑用户名
    sudo chown veronica /usr/local/var/mongodb
    sudo chown veronica /usr/local/var/log/mongodb
    ```

4. 命令行 运行

    ```sh
    //--dbpath 设置 db 文件夹
    //--logpath 设置 log 文件夹
    mongod --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --fork
    ```

5. config 文件运行

    ```sh
    mongod --config /usr/local/etc/mongod.conf
    ```

6. 关闭服务

    ```sh
    mongod -shutdown --dbpath /usr/local/var/mongodb
    ···
