# Sprites雪碧图

- 将一个页面涉及到的所有图片都包含到一张大图中去，然后利用CSS的 background-image，background-repeat，background-position属性的组合进行背景定位。
- 优点
    - 减少http请求，从而提高性能
    - 减少图片的字节，图片合并的字节总是小于图片的字节总和。
- 缺点：
    - 图片合并时，操作要求高
    - 开发时， 背景位置需要精准对齐
    - 维护时，部分改动，需要替换整张图片。甚至需要修改 CSS
