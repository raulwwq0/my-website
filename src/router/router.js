import { createWebHistory, createRouter} from 'vue-router';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/projects', name: 'Projects', component: Projects},
    {path: '/contact', name: 'Contact', component: Contact},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;