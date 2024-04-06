const projectsRoute = [
    {
        path: '/projects',
        name: 'projects',
        component: () => import('../pages/projects/index.vue'),
    },
    {
        path: '/projects/myLogo',
        name: 'myLogo',
        component: () => import('../pages/projects/myLogo.vue'),
    },
    {
        path: '/projects/moveBall',
        name: 'moveBall',
        component: () => import('../pages/projects/moveBall.vue'),
    },
];
export default projectsRoute;