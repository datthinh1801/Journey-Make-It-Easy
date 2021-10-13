<template>
  <div :class="$style['overlay']">
    <div :class="$style['form-container']">
      <div :class="$style['form-header']">
        <h2 class="no-select">Sign Up</h2>
        <router-link tag="button" to="/">
          <font-awesome-icon icon="times"/>
        </router-link>
      </div>
      <hr>
      <router-link tag="div" to="/">
        <Logo :class="$style.logo"/>
      </router-link>
      <div :class="$style['custom-form']">
        <input id="username" class="roboto" name="username" placeholder="Username or email"
               tabindex="1" type="text">
        <input id="password" class="roboto" name="password" placeholder="Password" tabindex="2"
               type="password">
        <input id="re-password" class="roboto" name="re-password"
               placeholder="Re-enter your password" tabindex="3"
               type="password">
        <button :class="$style['signup-button']" tabindex="4" @click="signUp">Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

export default {
  name: 'login',
  data() {
    return {}
  },
  components: {
    Logo,
  },
  methods: {
    signUp() {
      let username = document.querySelector('#username').value;
      let password = document.querySelector('#password').value;
      let rePassword = document.querySelector('#re-password').value;
      this.$store.dispatch('signUp', {username, password, rePassword});
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
  text-transform: capitalize;
  border: 1px solid #ddd;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  cursor: pointer;
}

.form-container .custom-form {
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: 20px auto 0 auto;
}

.form-container .custom-form input,
.signup-button {
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