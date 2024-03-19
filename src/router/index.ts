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
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import('../pages/projects.vue')
    }
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})