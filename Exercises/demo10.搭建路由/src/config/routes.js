// 该文件专门用于统一管理路由

import Login from "../pages/login";
import User from "../pages/user";

// routes数组中存储着所有的路由配置，每一个路由配置都是一个对象
const routes=[
    {
        path:'/login',
        component:Login
    },
    {
        path:'/user',
        component:User
    }
]

export default routes