import Vue from 'vue'
import VueRouter from 'vue-router'


import Layout from '@/layout';
///pages
import Home from '@/pages/home/index';
import Introduce from '@/pages/introduce/index';
import Product from '@/pages/product/index';
import Contact from '@/pages/contact/index';
import News from '@/pages/news/index';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Layout,
        children: [{
            path: '',
            name: 'home',
            component: Home
        }]
    },
    {
        path: '/introduce',
        component: Layout,
        children: [{
            path: '',
            name: 'introduce',
            component: Introduce

        }]
    },
    {
        path: '/product',
        component: Layout,
        children: [{
            path: '',
            name: 'product',
            component: Product
        }]
    },
    {
        path: '/news',
        component: Layout,
        children: [{
            path: '',
            name: 'news',
            component: News
        }]
    },
    {
        path: '/contact',
        component: Layout,
        children: [{
            path: '',
            name: 'contact',
            component: Contact
        }]
    },

]
const router = new VueRouter({
    // mode: 'history',
    routes: routes
})
export default router;