# sql注入原理

就是通过把SQL命令插入到Web表单递交或输入域名或页面请求的查询字符串，最终达到欺骗服务器执行恶意的SQL命令。
总的来说有以下几点:
1)永远不要信任用户的输入，要对用户的输入进行校验，可以通过正则表达式，或限制长度，对单引号和双"-"进行转换等。
2)永远不要使用动态拼装SQL，可以使用参数化的SQL或者直接使用存储过程进行数据查询存取。
3)永远不要使用管理员权限的数据库连接，为每个应用使用单独的权限有限的数据库连接。
4)不要把机密信息明文存放，请加密或者hash掉密码和敏感的信息。
