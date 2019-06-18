import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/page',
            name: 'page',
            component: () => import(/* webpackChunkName: "page" */ './pages/Page.vue'),
        },
        {
            path: '*',
            name: '404',
            component: () => import(/* webpackChunkName: "result" */ './pages/404.vue'),
        },
    ],
    // The below will force all new routes to scroll to the top of the page
    // scrollBehavior() {
    //     return { x: 0, y: 0 };
    // },
});
