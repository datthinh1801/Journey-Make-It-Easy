import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Explore from '../views/Explore';
import Attractions from '../views/Attractions';
import Restaurants from '../views/Restaurants';
import Hotels from '../views/Hotels';
import Articles from '../views/Articles';
import Restaurant from '../views/Restaurant';
import Attraction from '../views/Attraction';
import Hotel from "../views/Hotel";
import Article from "../views/Article";
import ArticleEditor from "../views/ArticleEditor";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/explore',
        name: 'explore',
        component: Explore
    },
    {
        path: '/attractions',
        name: 'attractions',
        component: Attractions
    },
    {
        path: '/restaurants',
        name: 'restaurants',
        component: Restaurants
    },
    {
        path: '/hotels',
        name: 'hotels',
        component: Hotels
    },
    {
        path: '/articles',
        name: 'articles',
        component: Articles
    },
    {
        path: '/restaurant',
        name: 'restaurant',
        component: Restaurant
    },
    {
        path: '/attraction',
        name: 'attraction',
        component: Attraction
    },
    {
        path: '/hotel',
        name: 'hotel',
        component: Hotel
    },
    {
        path: '/article-editor',
        name: 'articleEditor',
        component: ArticleEditor
    },
    {
        path: '/article',
        name: 'article',
        component: Article
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router