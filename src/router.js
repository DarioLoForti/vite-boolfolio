import { createRouter, createWebHistory } from 'vue-router';


import AppHome from './pages/AppHome.vue';
import AppProjects from './pages/AppProjects.vue';
import AppProject from './pages/AppProject.vue';
import AppNotFound from './pages/AppNotFound.vue';
import AppContactUs from './pages/AppContactUs.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
        {
            path: '/projects/:slug',
            name: 'project',
            component: AppProject
        },
        {
            path: '/contact-us',
            name: 'contact-us',
            component: AppContactUs
        },
        {
            path: '/:patMatch(.*)*',
            name: 'not-found',
            component: AppNotFound
        }
    ]
});
export { router }