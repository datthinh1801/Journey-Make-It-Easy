import Vue from "vue";
import router from "../router";

const axios = require('axios');

export default Vue.observable({
    //authenticated state
    authenticated: false,
    async authenticate(username, password) {
        let response = await axios.post('https://reqres.in/api/login', {
            username, password
        }).then(res => {
            return res.data;
        });

        this.authenticated = response.token;
        // this.authenticated = true;
        router.push({path: '/'});
    },

    //username
    username: null,
    getUsername() {
        return this.username;
    },

    // attraction
    attractions: [],
    async getAttraction() {
        this.attractions.push(await axios.get('https://my-json-server.typicode.com/datthinh1801/mock-api/attractionList').then(res => {
            return res.data[0];
        }));
    },

    // restaurants
    restaurants: [],
    async getRestaurant() {
        this.restaurants.push(await axios.get('https://my-json-server.typicode.com/datthinh1801/mock-api/attractionList').then(res => {
            return res.data[0];
        }));
    },

    // hotels
    hotels: [],
    async getHotels() {
        this.hotels.push(await axios.get('https://my-json-server.typicode.com/datthinh1801/mock-api/attractionList').then(res => {
            return res.data[0];
        }));
    }
});