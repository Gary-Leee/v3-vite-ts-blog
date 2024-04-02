const projectsRoute = [
    {
        path: '/projects',
        name: 'projects',
        component: () => import('../pages/projects/index.vue'),
    }
];
export default projectsRoute;