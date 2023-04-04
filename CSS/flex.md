# flex

1. 容器属性
    1. flex-direction: row | row-reverse | column | column-reverse;
    2. flex-wrap: nowrap | wrap | wrap-reverse;
    3. flex-flow: `<flex-direction> || <flex-wrap>`;
    4. justify-content: flex-start | flex-end | center | space-between | space-around;
    5. align-items: flex-start | flex-end | center | baseline | stretch;
    6. align-content: flex-start | flex-end | center | space-between | space-around | stretch;
2. 项目属性
    1. order: `<integer>`;
    2. flex-grow: `<number>`; /*default 0*/
    3. flex-shrink: `<number>`; /*default 1*/
    4. flex-basis: `<length> | auto`; /*default auto*/
    5. flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
    6. align-self: auto | flex-start | flex-end | center | baseline | stretch;
