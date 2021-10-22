import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Explore from '../views/Explore';
import Attractions from '../views/Attractions';
import Restaurants from '../views/Restaurants';
import Hotels from '../views/Hotels';
import Articles from '../views/Articles';
import Restaurant from '../views/Restaurant';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/explore',
        name: 'Explore',
        component: Explore
    },
    {
        path: '/attractions',
        name: 'Attractions',
        component: Attractions
    },
    {
        path: '/restaurants',
        name: 'Restaurants',
        component: Restaurants
    },
    {
        path: '/hotels',
        name: 'Hotels',
        component: Hotels
    },
    {
        path: '/articles',
        name: 'Articles',
        component: Articles
    },
    {
        path: '/restaurant',
        name: 'Restaurant',
        component: Restaurant
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
