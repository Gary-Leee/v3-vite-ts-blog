const blogsRoute = [
    {
        path: '/blogs',
        name: 'blogs',
        component: () => import('../pages/blogs/index.vue'),
        // children: [{
        //     path: '/blogs/svgLog',
        //     name: 'svgLog',
        //     component: () => import('../pages/blogs/svgLog.vue'),
        // }]

    },
    {
        path: '/blogs/svgLog',
        name: 'svgLog',
        component: () => import('../pages/blogs/svgLog.vue'),
    },
    {
        path: '/blogs/viteBuild',
        name: 'viteBuild',
        component: () => import('../pages/blogs/viteBuild.vue'),
    },
];
export default blogsRoute;