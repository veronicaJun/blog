# label 的作用是什么？如何使用？

- label标签来定义表单控件的关系：当用户选择label标签时，浏览器会自动将焦点转到和label标签相关的表单控件上。

    - 使用方式1

        ```html
        <label for="mobile">Number:</label>
        <input type="text" id="mobile"/>

        ```

    - 使用方式2

        ```html
        <label>Date:<input type="text"/></label>

        ```
