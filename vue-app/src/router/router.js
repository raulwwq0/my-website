import { createWebHistory, createRouter} from 'vue-router';
import Home from '../components/Home/Home';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/projects', name: 'Projects', component: Projects},
    {path: '/contact', name: 'Contact', component: Contact},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(function (to, from, next) { 
    window.scrollTo(0, 0);
    next();
});

export default router;