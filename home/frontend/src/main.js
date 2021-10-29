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
        // SETTINGS
        BASE_URL: 'http://localhost:7000/graphql',
        CSRF_TOKEN: '',
        // GENERIC STATE
        currentURL: '/',
        city: 'Ho Chi Minh City',
        item: null,

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
        signIn(state, token) {
            state.authenticated = token;
        },
        signUp() {

        },
        getAttraction(state, data) {
            state.attractionArr = data;
        },
        clearAllAttractions(state) {
            state.attractionArr = [];
        },
        getRestaurant(state, data) {
            state.restaurantArr = data;
        },
        clearAllRestaurants(state) {
            state.restaurantArr = [];
        },
        getHotel(state, data) {
            state.hotelArr = data;
        },
        clearAllHotels(state) {
            state.hotelArr = [];
        },
        changePath(state, path) {
            state.currentURL = path;
        },
        getArticle(state, articleArr) {
            state.articleArr = articleArr;
        },
        clearAllArticles(state) {
            state.articleArr = [];
        }
    },
    actions: {
        async getCSRFToken(context) {
            let response = await axios.get(`${context.state.BASE_URL}/token`);
            return response.data.token;
        },
        async signIn(context, credential) {
            let {username, password} = credential;
            // let token = await context.dispatch('getCSRFToken');
            let response = await axios.post(`${context.state.BASE_URL}/login`, {
                    username, password
                },
                {
                    headers: {
                        'Origin': 'http://localhost',
                        // 'X-CSRFToken': token,
                    },
                });
            console.log(response.data);
            // context.commit('signIn', response.data.token);
            // await router.push({path: context.state.currentURL});
        },
        async signUp(context, payload) {
            let {
                username, password
                // , rePassword
            } = payload;
            let response = await axios.post('https://reqres.in/api/users', {
                email: username, password: password
                // , rePassword
            });
            console.log(response);
            context.commit('signUp');
            await router.push({path: '/signin'})
        },
        async getAttraction(context, city) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}`,
                data: {
                    query: `query {
                    getCityByName(name: "${city}") {
                        attractions {
                          id,
                          name,
                          openTime,
                          numberVoting,
                          suggestedDuration,
                          ratingScore,
                          images{
                            id,
                            link,
                          }
                        }
                    }
                  }`
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(resp => {
                return resp.data;
            }).then(respData => {
                data = respData.data['getCityByName']['attractions'];
            });

            context.commit('getAttraction', data);
        },
        async getRestaurant(context, city) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}`,
                data: {
                    query: `query {
                    getCityByName(name: "${city}") {
                        restaurants {
                          id,
                          name,
                          cuisines,
                          priceRange,
                          specialDiets,
                          numberVoting,
                          ratingScore,
                          images {
                            id,
                            link,
                          }
                        }
                    }
                  }`
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(resp => {
                return resp.data;
            }).then(respData => {
                data = respData.data['getCityByName']['restaurants'];
            });

            context.commit('getRestaurant', data);
        },
        async getHotel(context, city) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}`,
                data: {
                    query: `query {
                    getCityByName(name: "${city}") {
                      stays {
                        id,
                        name,
                        roomTypes,
                        roomFeatures,
                        propertyAmenities,
                        numberVoting,
                        ratingScore,
                        images {
                          id,
                          link
                        }
                      }
                    }
                  }`
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(resp => {
                return resp.data;
            }).then(respData => {
                data = respData.data['getCityByName']['stays'];
            });

            context.commit('getHotel', data);
        },
        async getArticle(context) {
            let articleArr = await axios.get('https://jsonplaceholder.typicode.com/posts');
            context.commit('getArticle', articleArr.data);
        },
        async getAllAttractions(context) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}`,
                data: {
                    query: `query {
                        allAttractions {
                          id,
                          name,
                          images {
                            id,
                            link
                          }
                        }
                    }`
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(resp => {
                return resp.data;
            }).then(respData => {
                data = respData.data['allAttractions'];
            });

            context.commit('getAttraction', data);
        }
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')