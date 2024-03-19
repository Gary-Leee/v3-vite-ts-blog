import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
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
        path: '/blogs',
        name: 'blogs',
        component: () => import('../pages/blogs.vue')
    }
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})