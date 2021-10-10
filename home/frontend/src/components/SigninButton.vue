<template>
  <div>
    <router-link tag="button" to="/signin" v-if="!authenticated">Sign in</router-link>
    <div v-else class="user-profile-container">
      <div class="user-profile-img"></div>
      <div class="user-profile-name no-select">Username</div>
    </div>
  </div>
</template>

<script>
import store from "../store/store";

export default {
  name: 'SigninButton',
  computed: {
    authenticated() {
      return store.authenticated;
    }
  },
  methods: {
    authenticate() {
      store.authenticate();
    }
  }
}
</script>

<style scoped>
.user-profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
}

.user-profile-name {
  font-size: 14px;
  font-weight: 500;
}

.user-profile-img {
  background-color: #F9C100;
  border-radius: 50%;
  border: 3px solid transparent;
  height: 30px;
  width: 30px;
  margin-right: 5px;
}

.user-profile-container:hover .user-profile-name {
  text-decoration: underline;
}

.user-profile-container:hover .user-profile-img {
  border-color: #888;
}

button {
  width: 100px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  background-color: #F9C100;
  border: none;
  transition: 0.3s;
  margin-right: 10px;
}

button:hover {
  background-color: #FDD039;
  border-color: #FDD039;
}
</style>