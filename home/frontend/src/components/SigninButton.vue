<template>
  <div>
    <button @click="showModal">Sign In</button>
    <modal name="sign-in-modal" :width="700" :height="500">
      <div :class="$style['signin-modal']">
        <div :class="$style.form">
          <div :class="$style['signin-form']" id="signin-form">
            <h3 class="no-select">Sign In</h3>
            <hr>
            <input id="username" class="roboto" name="username" placeholder="USERNAME" tabindex="1" type="text">
            <input id="password" class="roboto" name="password" placeholder="PASSWORD" tabindex="2" type="password">
            <a href="/forgot-password" tabindex="4">Forgot your password?</a>
            <button :class="$style['signin-button']" tabindex="3" @click="signIn">Sign In</button>
            <div :class="$style.or"><span class="no-select">Or</span></div>
            <button :class="$style['signin-button']" tabindex="5" @click="signUp">Sign Up</button>
          </div>
          <div :class="$style['signin-form']" style="display: none;" id="signup-form">
            <h3 class="no-select">Sign Up</h3>
            <hr>
            <input id="username" class="roboto" name="username" placeholder="USERNAME" tabindex="1" type="text">
            <input id="password" class="roboto" name="password" placeholder="PASSWORD" tabindex="2" type="password">
            <input id="password2" class="roboto" name="password2" placeholder="RETYPED PASSWORD" tabindex="3" type="password">
            <button :class="$style['signin-button']" tabindex="4" @click="signUp">Sign Up</button>
          </div>
        </div>
        <img src="images/signin_img.jpg" alt="">
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: 'SigninButton',
  data(){
    return {
    }
  },
  computed: {
    authenticated() {
      return this.$store.state.authenticated;
    }
  },
  methods: {
    showModal() {
      this.$modal.show('sign-in-modal');
    },
    signIn() {

    },
    signUp() {
      document.querySelector('#signin-form').style["display"] = "none";
      document.querySelector('#signup-form').style["display"] = "flex";
    },
    backToSignIn() {
      document.querySelector('#signin-form').style["display"] = "flex";
      document.querySelector('#signup-form').style["display"] = "none";
    }
  }
}
</script>

<style module>
.signin-form {
  display: flex;
  flex-direction: column;
  transition: 0.3s;
}

.signin-form hr {
  width: 100%;
  max-width: 100%;
}

.signin-form input {
  border-top: none;
  border-left: none;
  border-right: none;
  margin: 10px 0;
  height: 30px;
  font-size: 16px;
}

.signin-form input:focus {
  outline: none;
}

.signin-form a {
  text-decoration: none;
  font-size: 16px;
  color: #aaa;
  margin: 5px 0;
}

.signin-form h3 {
  margin: 0;
}

.signin-form button {
  width: 100%;
  margin: 15px 0;
}

.or {
  display: flex;
  justify-content: center;
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

.form {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.signin-modal {
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.signin-modal img {
  max-width: 120%;
  max-height: 120%;
}

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