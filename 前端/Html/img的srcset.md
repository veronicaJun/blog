# img的 srcset 属性的作⽤？

- srcset属性用于设置不同屏幕密度下，适用的不同图片。

- 写法一

    ```html
    <img src="image-128.png" srcset="image-256.png 2x" />
    ```

- 新写法

    ```html
    <img src="image-128.png"
        srcset="image-128.png 128w, image-256.png 256w, image-512.png 512w"
        sizes="(max-width: 360px) 340px, 128px" />
    ```

    - srcset 指定图片的地址和对应的图片质量。
    - sizes 用来设置图片的尺寸零界点。
        - srcset 中的 w 单位，可视区域小于最大值。
        - sizes="[media query] [length], [media query] [length] ... "
