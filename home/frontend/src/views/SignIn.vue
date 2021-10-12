<template>
  <div :class="$style['overlay']">
    <div :class="$style['form-container']">
      <div :class="$style['form-header']">
        <h2 class="no-select">Sign In</h2>
        <router-link tag="button" to="/">
          <font-awesome-icon icon="times"/>
        </router-link>
      </div>
      <hr>
      <router-link tag="div" to="/">
        <Logo :class="$style.logo"/>
      </router-link>
      <div :class="$style['custom-form']">
        <input id="username" v-model="username" class="roboto" name="username" placeholder="Username or email"
               tabindex="1" type="text">
        <input id="password" v-model="password" class="roboto" name="password" placeholder="Password" tabindex="2"
               type="password">
        <div :class="$style['forgot-pw-container']">
          <a href="/forgot-password" tabindex="4">Forgot your password ?</a>
        </div>
        <button :class="$style['signin-button']" tabindex="3" type="submit" @click="signIn">Sign in</button>
        <div :class="$style.or"><span class="no-select">Or</span></div>
      </div>
      <router-link :class="$style['signup-button']" tabindex="5" tag="button" to="/signup">Sign Up</router-link>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

import store from '../store/store';

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    Logo,
  },
  methods: {
    signIn() {
      // const username = document.querySelector('#username').value;
      // const password = document.querySelector('#password').value;
      store.authenticate('eve.holt@reqres.in', 'cityslicka');
    }
  }
}
</script>

<style module>
.signup-button {
  border-radius: 10px;
  background-color: #F9C100;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #ddd;
  height: 40px;
  width: 80%;
  display: flex;
  margin: auto;
  cursor: pointer;
  justify-content: center;
  align-items: center;
}

.or {
  display: flex;
  justify-content: center;
  margin: 30px 0 20px 0;
  text-align: center;
  align-items: center;
  max-width: 100%;
}

.or span {
  margin: 0 20px;
}

.or::before {
  width: 100%;
  content: '';
  height: 1px;
  background-color: #ccc;
}

.or::after {
  width: 100%;
  content: '';
  height: 1px;
  background-color: #ccc;
}

.forgot-pw-container {
  width: 100%;
  text-align: right;
  margin: 10px 0 10px 0;
}

.forgot-pw-container a {
  text-decoration: none;
  color: black;
  font-size: 14px;
}

.forgot-pw-container a:hover {
  text-decoration: underline;
}

.signin-button {
  background-color: #F9C100;
  color: white;
  font-family: 'Roboto', sans-serif;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 24px;
  cursor: pointer;
}

.form-container .custom-form {
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: 20px auto 0 auto;
}

.form-container .custom-form input,
.signin-button {
  height: 40px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 16px;
}

.form-container .custom-form input::placeholder {
  font-size: 14px;
}

.form-container .custom-form input[type="text"],
.form-container .custom-form input[type="password"] {
  padding-left: 20px;
}

.form-container .logo {
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 28px;
  cursor: pointer;
}

.form-container hr {
  width: 100%;
  max-width: 100%;
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.form-header h2 {
  margin: 0;
  font-size: 22px;
}

.form-header button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid #ddd;
  font-size: 18px;
  cursor: pointer;
}

.overlay {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
}

.form-container {
  background-color: white;
  width: 500px;
  height: 500px;
  margin: 40px auto auto auto;
  border-radius: 14px;
  padding: 10px 0 20px 0;
}
</style>