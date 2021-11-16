import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VModal from 'vue-js-modal'

import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    faUserSecret,
    faEdit
} from '@fortawesome/free-solid-svg-icons'
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import router from './router'
import axios from "axios";

library.add(faUserSecret, faEdit);
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
        accessToken: '',
        refreshToken: '',

        // GENERIC STATE
        city_id: '',
        city_name: '',

        // STATE for HOME
        cities: [],
        modalUp: false,

        // STATE for EXPLORE page
        attractionArr: [],
        restaurantArr: [],
        hotelArr: [],

        // STATE for ARTICLES page
        articleArr: [],

        // STATE for rendering item in SINGLE ITEM pages
        item: {},
        currentItemId: '',
    },
    mutations: {
        initializeStore(state) {
            if (localStorage.getItem('journey-jwt')) {
                state.refreshToken = localStorage.getItem('journey-jwt');
                let refreshStatus = this.dispatch('refreshToken', state.refreshToken);
                if (!refreshStatus) {
                    state.refreshToken = '';
                    state.username = '';
                }
            } else {
                state.refreshToken = '';
                state.username = '';
            }
        },
        saveToken(state, {
            accessToken,
            refreshToken
        }) {
            state.accessToken = accessToken;
            state.refreshToken = refreshToken;
            localStorage.setItem('journey-jwt', refreshToken);
        },
        saveUsername(state, username) {
            state.username = username;
        },
        revokeCred(state) {
            state.accessToken = '';
            state.refreshToken = '';
            state.username = '';
            localStorage.removeItem('journey-jwt');
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
        getArticle(state, articleArr) {
            state.articleArr = articleArr;
        },
        clearAllArticles(state) {
            state.articleArr = [];
        },
        saveItem(state, item) {
            state.item = item;
            if (item.city) {
                this.commit('changeCity', {
                    city_id: item.city.id,
                    city_name: item.city.name
                });
            }
        },
        saveCity(state, item) {
            state.item = item;
        },
        changeItemId(state, id) {
            state.currentItemId = id;
        },
        changeCity(state, {
            city_id,
            city_name
        }) {
            state.city_id = city_id;
            state.city_name = city_name;
        },
    },
    actions: {
        async signIn(context, credential) {
            let {
                username,
                password
            } = credential;

            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `mutation {
                        tokenAuth(username: "${username}", password: "${password}") {
                            token,
                            payload,
                            refreshToken
                        }
                    }`
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }).then(resp => {
                return resp.data;
            }).then(respData => {
                data = respData;
            });

            if (data['errors']) {
                return false;
            } else {
                let tokenAuth = data['data']['tokenAuth'];
                let accessToken = tokenAuth['token'];
                let refreshToken = tokenAuth['refreshToken'];
                let username = tokenAuth['payload']['username'];

                context.commit('saveToken', {
                    accessToken,
                    refreshToken
                });
                context.commit('saveUsername', username);
                return true;
            }
        },
        async signUp(context, payload) {
            let {
                username,
                password
            } = payload;
            await axios.post(`${context.state.BASE_URL}/register`,
                `username=${username}&password=${password}`
            );
        },
        async signOut(context) {
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `mutation {
                        revokeToken(refreshToken: "${context.state.refreshToken}") {
                            revoked
                        }
                    }`
                }
            });

            context.commit('revokeCred');
            await router.push('/').catch(e => {
                return e
            });
            window.location.reload();
        },
        async refreshToken(context, refreshToken) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `mutation {
                        refreshToken(refreshToken: "${refreshToken}") {
                            token,
                            payload,
                            refreshToken
                        }
                    }`
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }).then(resp => {
                return resp.data;
            }).then(respData => {
                data = respData;
            });

            if (data['errors']) {
                return false;
            } else {
                let tokenAuth = data['data']['refreshToken'];
                let accessToken = tokenAuth['token'];
                let refreshToken = tokenAuth['refreshToken'];
                let username = tokenAuth['payload']['username'];

                context.commit('saveToken', {
                    accessToken,
                    refreshToken
                });
                context.commit('saveUsername', username);
                return true;
            }
        },
        async getAttraction(context, city_id) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `query {
                    getCityById(id: "${city_id}") {
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
                data = respData.data['getCityById']['attractions'];
            });

            context.commit('getAttraction', data);
        },
        async getRestaurant(context, city_id) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `query {
                    getCityById(id: "${city_id}") {
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
                data = respData.data['getCityById']['restaurants'];
            });

            context.commit('getRestaurant', data);
        },
        async getHotel(context, city_id) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `query {
                    getCityById(id: "${city_id}") {
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
                data = respData.data['getCityById']['stays'];
            });

            context.commit('getHotel', data);
        },
        async getAllArticles(context) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `query {
                        allBlogs {
                          id,
                          title,
                          content,
                          user {
                            id,
                            username
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
                data = respData.data['allBlogs'].reverse();
            });

            context.commit('getArticle', data);
        },
        async getAllAttractions(context, limit) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `query {
                        allAttractions(limit: ${limit}) {
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
        async getAllRestaurants(context, limit) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `query {
                        allRestaurants(limit: ${limit}) {
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
        async getAllHotels(context, limit) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `query {
                        allStays(limit: ${limit}) {
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
                        allCities {
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
                data = respData.data['allCities'];
            });

            context.commit('getCities', data);
        },
        async getAttractionDetail(context, id) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `query {
                         getAttractionById(id: "${id}"){
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
                                id,
                                name
                            },
                            images{
                              id,
                              link
                            },
                            reviews {
                                id,
                                text,
                                point,
                                user {
                                    id,
                                    username
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
                data = respData.data['getAttractionById'];
            });

            context.commit('saveItem', data);
        },
        async getRestaurantDetail(context, id) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `query {
                         getRestaurantById(id: "${id}"){
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
                                id
                                name
                            },
                            images{
                              id,
                              link
                            },
                            reviews {
                                text,
                                point,
                                user {
                                    id,
                                    username
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
                data = respData.data['getRestaurantById'];
            });

            context.commit('saveItem', data);
        },
        async getHotelDetail(context, id) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `query {
                        getStayById(id: "${id}") {
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
                              id
                              name
                            },
                            images {
                              id,
                              link
                            },
                            reviews {
                                text,
                                point,
                                user {
                                    id,
                                    username
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
                data = respData.data['getStayById'];
            });

            context.commit('saveItem', data);
        },
        async getCityDetail(context, id) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `query {
                        getCityById(id: "${id}") {
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
                data = respData.data['getCityById'];
            });

            context.commit('saveCity', data);
        },
        async getArticleDetail(context, id) {
            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `query {
                        getBlogById(id: "${id}") {
                            id
                            title
                            content
                            user {
                                id
                                username
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
                data = respData.data['getBlogById'];
            });

            context.commit('saveItem', data);
        },
        async submitReview(context, {
            type,
            id,
            text,
            point
        }) {
            if (context.state.accessToken === "") {
                alert('You\'re not logged in yet. Please login and try again');
                return;
            }

            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `mutation {
                        review${type}(id: "${id}", review: "${text}", point: ${point}) {
                            reviews {
                                id
                            }
                        }
                    }`
                },
                headers: {
                    'Authorization': `JWT ${context.state.accessToken}`
                }
            }).then(resp => {
                return resp.data;
            }).then(respData => {
                data = respData;
            });

            if (data["errors"] && data["errors"]['message'] === "Signature has expired") {
                if (!context.dispatch('refreshToken', context.state.refreshToken)) {
                    context.commit('revokeCred');
                    alert('Your session has expired. Please login and try again!');
                } else {
                    context.dispatch('submitReview', {
                        type: type,
                        id: id,
                        text: text,
                        point: point
                    });
                }
            } else if (data["errors"]) {
                alert('An error has ocurred while submitting your review. Please reload the page and try again.');
            }
        },
        async postBlog(context, {
            title,
            content
        }) {
            if (context.state.accessToken === "") {
                alert('You\'re not logged in yet. Please login and try again');
                return;
            }

            let data;
            await axios({
                method: 'post',
                url: `${context.state.BASE_URL}/graphql`,
                data: {
                    query: `mutation {
                        createBlog(title: "${title}", content: "${content}") {
                            blog {
                                id
                            }
                        }
                    }`
                },
                headers: {
                    'Authorization': `JWT ${context.state.accessToken}`
                }
            }).then(resp => {
                return resp.data;
            }).then(respData => {
                data = respData;
            });

            if (data["errors"] && data["errors"]['message'] === "Signature has expired") {
                if (!context.dispatch('refreshToken', context.state.refreshToken)) {
                    context.commit('revokeCred');
                    alert('Your session has expired. Please login and try again!');
                } else {
                    context.dispatch('postBlog', {
                        title: title,
                        content: content
                    });
                }
            } else if (data["errors"]) {
                alert('An error has ocurred while posting your blog. Please reload the page and try again.');
            }
        }
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')