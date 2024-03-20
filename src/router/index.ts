import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
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

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 设置路由守卫
router.beforeEach((to, from, next) => {
    if (to.fullPath == from.path && to.name != 'main') {
        return;
    } else {
        next(); // 继续导航
    }
});