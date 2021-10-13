import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUserSecret} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import router from './router'
import axios from "axios";

library.add(faUserSecret);
Vue.use(Vuex);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

const store = new Vuex.Store({
    state: {
        // GENERIC STATE
        currentURL: '/',
        place: null,

        // STATE for AUTHENTICATION
        authenticated: false,

        // STATE for EXPLORE page
        attractionArr: [],
        restaurantArr: [],
        hotelArr: [],
        maxHorizontalItems: 3,

        // STATE for ARTICLES page
        articleArr: [],
    },
    mutations: {
        async signIn(state, credential) {
            let {username, password} = credential;
            let response = await axios.post('https://reqres.in/api/login', {
                username, password
            });

            state.authenticated = response.data.token;
            await router.push({path: state.currentURL});
        },
        async signUp(state, payload) {
            let {
                username, password
                // , rePassword
            }
                = payload;
            let response = await axios.post('https://reqres.in/api/users', {
                email: username, password: password
                // , rePassword
            });

            console.log(response);
            await router.push({path: '/signin'})
        },
        async getAttraction(state) {
            state.attractionArr.push(
                await axios.get('https://my-json-server.typicode.com/datthinh1801/mock-api/attractionList').then(res => {
                    return res.data[0];
                }));
        },
        clearAllAttractions(state) {
            state.attractionArr = [];
        },
        async getRestaurant(state) {
            state.restaurantArr.push(
                await axios.get('https://my-json-server.typicode.com/datthinh1801/mock-api/attractionList').then(res => {
                    return res.data[0];
                }));
        },
        clearAllRestaurants(state) {
            state.restaurantArr = [];
        },
        async getHotel(state) {
            state.hotelArr.push(
                await axios.get('https://my-json-server.typicode.com/datthinh1801/mock-api/attractionList').then(res => {
                    return res.data[0];
                }));
        },
        clearAllHotels(state) {
            state.hotelArr = [];
        },
        changePath(state, path) {
            state.currentURL = path;
        },
        async getArticle(state) {
            state.articleArr =
                await axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
                    return res.data;
                });
        },
        clearAllArticles(state) {
            state.articleArr = [];
        }
    },
    getters: {
        attractions: state => {
            return state.attractionArr;
        },
        restaurants: state => {
            return state.restaurantArr;
        },
        hotels: state => {
            return state.hotelArr;
        },
        articles: state => {
            return state.articleArr;
        }
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
