import Vue from "vue";

export default Vue.observable({
    //authenticated state
    authenticated: false,
    authenticate() {
        this.authenticated = true;
    },

    //username
    username: null,
    getUsername() {
        return this.username;
    }
});