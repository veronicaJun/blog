# 30FPS

- 如何查看页面的FPS
    - 开发环境
       1. chrome 开发者工具 - performance - reload button
       2. 左上角工具栏，找到 More tools 中的 rendering，勾选上 FPS meter
    - 生产环境
        1. 通过 requestAnimationFrame API 来定时执行一些 js 代码

            ```js
            let lastTime = performance.now()
            let frame = 0
            let lastFameTime = performance.now()
            const loop = time => {
                let now =  performance.now()
                let fs = (now - lastFameTime)
                lastFameTime = now
                let fps = Math.round(1000 / fs)
                frame++
                if (now > 1000 + lastTime) {
                    fps = Math.round(( frame * 1000 ) / ( now - lastTime ))
                    frame = 0
                    lastTime = now
                }     
                window.requestAnimationFrame(loop)
            }
            ```

        2. 通过自定义卡顿标准，js判断是否卡顿

            ```js
            /**
            * @function isLowFPS
            * @param | FPSList 采集的FPS值
            * @param | below FPS卡顿的限定值
            * @param | number below个数
            */
           const isLowFPS = (FPSList, below, number) => {
             let count = 0
             for(let i = 0; i < FPSList.length; i++) {
               if (FPSList[i] < below) {
                 count++
               } else {
                 count = 0
               }
               if (count >= number) {
                 return true
               }
             }
             return false
           }
            ```
