import { createRouter, createWebHistory, RouterView } from 'vue-router';
import Home from "../public/presentation/views/home.vue";
import NewIncident from "@/support/presentation/views/new-incident.vue";
import PageNotFound from "../public/presentation/views/page-not-found.vue";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/support',
        component: RouterView,
        children: [
            {
                path: 'incidents/new',
                name: 'new-incident',
                component: NewIncident
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'page-not-found',
        component: PageNotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;