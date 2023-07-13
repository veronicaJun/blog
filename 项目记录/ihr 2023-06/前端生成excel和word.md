# 前端生成 excel 和 word

## 1. 前言

在前端项目中，我们经常会遇到需要导出 excel 或者 word 的需求，比如导出用户列表、导出报表等等。本文将介绍如何在前端项目中生成 excel 和 word。

## 2. 思路

1. 前端框架：vue2
2. 在页面上放一个 iframe
3. 通过 new Vue({data,template}) 实现数据和模板的绑定，生成 html
4. 将生成的 html 写入 iframe 中
5. 调用 print() 方法

## 3. 实现

1. 将 excel 模板 复制到 <https://lingdaima.com/table/> 中，生成 html 模板
2.
