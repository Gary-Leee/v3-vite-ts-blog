const blogsRoute = [{
    path: '/blogs',
    name: 'blogs',
    component: () => import('../pages/blogs/index.vue'),
    children: [{
        path: '/blogs/svgLog',
        name: 'svgLog',
        component: () => import('../pages/blogs/svgLog.vue'),
    }]
}];
export default blogsRoute;