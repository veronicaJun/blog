# Element-plus

Element-plus datepiacker 中文化
环境：Vue3-setup
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const locale = zhCn
    <el-config-provider :locale="locale">
        <KeepAlive>
            <RouterView></RouterView>
        </KeepAlive>
    </el-config-provider>
