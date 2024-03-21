import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router"
import blogsRoute from "./blogsRoute";
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'main',
        component: () => import('../pages/mainPage-en.vue')
    },
    {
        path: '/zh-cn',
        name: 'main-cn',
        component: () => import('../pages/mainPage-cn.vue')
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import('../pages/projects.vue')
    },
    ...blogsRoute
];
let history = null;
if (process.env.NODE_ENV === 'production') {
    // 生产环境
    history = createWebHistory()
} else {
    // 开发环境
    history = createWebHashHistory()
}
export const router = createRouter({
    history: history,
    routes
})

// 设置路由守卫
router.beforeEach((to, from, next) => {
    // console.log(to.fullPath, from.path)
    if (to.fullPath == from.path && to.name != 'main') {
        return;
    } else {
        next(); // 继续导航
    }
});