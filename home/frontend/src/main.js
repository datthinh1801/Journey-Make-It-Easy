import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VModal from 'vue-js-modal'
import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    faUserSecret
} from '@fortawesome/free-solid-svg-icons'
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import router from './router'
import axios from "axios";

library.add(faUserSecret);
Vue.use(Vuex);
Vue.use(VModal);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

const store = new Vuex.Store({
    state: {
        // SETTINGS
        BASE_URL: 'http://localhost:8000',

        // AUTHENTICATION
        username: '',

        // GENERIC STATE
        currentURL: '/',
        city: '',

        // STATE for HOME
        cities: [],

        // STATE for EXPLORE page
        attractionArr: [],
        restaurantArr: [],
        hotelArr: [],

        // STATE for ARTICLES page
        articleArr: [],

        // STATE for rendering item in SINGLE ITEM pages
        item: {},
        currentItemName: '',
    },
    mutations: {
        signIn(state, username) {
            state.username = username;
        },
        signOut(state) {
            state.username = '';
        },
        getCities(state, cities) {
            state.cities = cities;
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
        },
        saveItem(state, item) {
            state.item = item;
            this.commit('changeCity', item.city.name);
        },
        saveCity(state, item) {
            state.item = item;
        },
        changeItemName(state, name) {
            state.currentItemName = name;
        },
        changeCity(state, city) {
            state.city = city;
        }
    },
    actions: {
        async signIn(context, credential) {
            let {
                username,
                password
            } = credential;

            let response = await axios.post(`${context.state.BASE_URL}/login`,
                `username=${username}&password=${password}`, {
                    headers: {
                        'Origin': context.state.BASE_URL,
                    },
                });

            if (response.status === 200) {
                context.commit('signIn', username);
            }
            await router.push({
                path: '/'
            });
        },
        async signUp(context, payload) {
            let {
                username,
                password
            } = payload;
            await axios.post(`${context.state.BASE_URL}/register`,
                `username=${username}&password=${password}`
            );

            await router.push({
                path: '/'
            })
        },
        async signOut(context) {
            context.commit('signOut');
            await router.push('/');
        },
        async getAttraction(context, city) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
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
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `query {
                    getCityByName(name: "${city}") {
                        restaurants {
                          id,
                          name,
                          cuisines {
                              id,
                              value
                          },
                          priceRange,
                          specialDiets {
                              id,
                              value
                          },
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
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `query {
                    getCityByName(name: "${city}") {
                      stays {
                        id,
                        name,
                        roomTypes {
                            id,
                            value
                        },
                        roomFeatures {
                            id,
                            value
                        },
                        propertyAmenities {
                            id,
                            value
                        },
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
        async getAllArticles(context) {
            let articleArr = await axios.get('https://jsonplaceholder.typicode.com/posts');
            context.commit('getArticle', articleArr.data);
        },
        async getAllAttractions(context) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `query {
                        allAttractions {
                          id,
                          name,
                          numberVoting,
                          ratingScore,
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
        },
        async getAllRestaurants(context) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `query {
                        allRestaurants {
                          id,
                          name,
                          numberVoting,
                          ratingScore,
                          images {
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
                data = respData.data['allRestaurants'];
            });

            context.commit('getRestaurant', data);
        },
        async getAllHotels(context) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `query {
                        allStays {
                          id,
                          name,
                          numberVoting,
                          ratingScore,
                          images {
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
                data = respData.data['allStays'];
            });

            context.commit('getHotel', data);
        },
        async getAllCities(context) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `query {
                        allCitys {
                          id,
                          name,
                          nation {
                              name,
                          },
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
                data = respData.data['allCitys'];
            });

            context.commit('getCities', data);
        },
        async getAttractionDetail(context, name) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `query {
                         getAttractionByName(name: "${name}"){
                            id,
                            name,
                            about,
                            address,
                            admissionTicket,
                            openTime,
                            suggestedDuration,
                            numberVoting,
                            ratingScore,
                            ggmap,
                            city {
                                name
                            },
                            images{
                              id,
                              link
                            },
                            reviews {
                                id,
                                text
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
                data = respData.data['getAttractionByName'];
            });

            context.commit('saveItem', data);
        },
        async getRestaurantDetail(context, name) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `query {
                         getRestaurantByName(name: "${name}"){
                            id,
                            name,
                            address,
                            openTime,
                            phone,
                            website,
                            cuisines {
                                id,
                                value
                            },
                            meals {
                                id,
                                value
                            },
                            specialDiets {
                                id,
                                value
                            },
                            priceRange,
                            features {
                                id,
                                value
                            },
                            numberVoting,
                            ratingScore,
                            city {
                                name
                            },
                            images{
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
                data = respData.data['getRestaurantByName'];
            });

            context.commit('saveItem', data);
        },
        async getHotelDetail(context, name) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `query {
                        getStayByName(name: "${name}") {
                            id,
                            name,
                            about,
                            address,
                            phone,
                            email,
                            roomFeatures {
                                id,
                                value
                            },
                            roomTypes {
                                id,
                                value
                            },
                            propertyAmenities {
                                id,
                                value
                            },
                            numberVoting,
                            ratingScore,
                            city {
                              name
                            },
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
                data = respData.data['getStayByName'];
            });

            context.commit('saveItem', data);
        },
        async getCityDetail(context, name) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `query {
                        getCityByName(name: "${name}") {
                            id,
                            name,
                            info,
                            images {
                              id,
                              link,
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
                data = respData.data['getCityByName'];
            });

            context.commit('saveCity', data);
        }
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')