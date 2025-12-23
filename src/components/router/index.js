import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import FAQ from "./pages/FAQ.vue";
import Login from "./pages/Login.vue";
import Work from "./pages/Work.vue";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },{
        path: '/home',
        redirect: '/'
    },{
        path: '/about',
        name: 'About',
        component: About
    },{
        path: '/faq',
        name: 'FAQ',
        component: FAQ
    },{
        path: '/login',
        name: 'Login',
        component: Login
    },{
        path: '/work',
        name: 'Work',
        component: Work
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;