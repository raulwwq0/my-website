import { createWebHistory, createRouter} from 'vue-router';
import HomeES from '../components/es/Home/Home';
import ProjectsES from '../components/es/Projects/Projects';
import ContactES from '../components/es/Contact/Contact';
import HomeEN from '../components/en/Home/Home';
import ProjectsEN from '../components/en/Projects/Projects';
import ContactEN from '../components/en/Contact/Contact';
import ErrorComponent from '../components/Error';

const routes = [
    {path: '/', redirect: '/es/home'},
    {path: '/es/home', name: 'HomeES', component: HomeES},
    {path: '/es/projects', name: 'ProjectsES', component: ProjectsES},
    {path: '/es/contact', name: 'ContactES', component: ContactES},
    {path: '/en/home', name: 'HomeEN', component: HomeEN},
    {path: '/en/projects', name: 'ProjectsEN', component: ProjectsEN},
    {path: '/en/contact', name: 'ContactEN', component: ContactEN},
    {path: '/:catchAll(.*)', name: 'ErrorComponent', component: ErrorComponent}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
});

export default router;