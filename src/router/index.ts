import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'main',
        component: () => import('../pages/mainPage.vue')
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