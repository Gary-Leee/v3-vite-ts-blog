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
        component: () => import('../pages/blogs/index.vue'),
        children: [{
            path: '/blogs/firstBlog',
            name: 'firstBlog',
            component: () => import('../pages/blogs/firstBlog.vue'),
        }]
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

// 设置路由守卫
router.beforeEach((to, from, next) => {
    console.log(to, from)
    // debugger;
    if (to.fullPath == from.path && to.name != 'main') {
        return;
    } else {
        next(); // 继续导航
    }
});