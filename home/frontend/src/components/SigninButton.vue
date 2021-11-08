<template>
  <div>
    <button @click="showModal">Sign In</button>
    <modal name="sign-in-modal" @closed="closeModal" :width="700" :height="500">
      <div :class="$style['signin-modal']">
        <div :class="$style.form">
          <div :class="$style['signin-form']" id="signin-form">
            <h3 class="no-select">Sign In</h3>
            <hr>
            <input id="username" class="roboto" name="username" placeholder="USERNAME" tabindex="1" type="text" v-model="username">
            <span v-if="usernameAlert" :class="$style['alert-msg']">Username only includes characters, numbers, and underscore.</span>

            <input id="password" class="roboto" name="password" placeholder="PASSWORD" tabindex="2" type="password" v-model="password">
            <span v-if="passwordAlert" :class="$style['alert-msg']">Password must be at least 8 characters long including lowercase and uppercase characters, numbers, and at least one special character.</span>
            <a href="/forgot-password" tabindex="4">Forgot your password?</a>

            <button :class="$style['signin-button']" tabindex="3" @click="signIn">Sign In</button>
            <div :class="$style.or"><span class="no-select">Or</span></div>
            <button :class="$style['signin-button']" tabindex="5" @click="toSignUp">Sign Up</button>
          </div>



          <div :class="$style['signin-form']" style="display: none;" id="signup-form">
            <h3 class="no-select">Sign Up</h3>
            <hr>
            <input id="username" class="roboto" name="username" placeholder="USERNAME" tabindex="1" type="text" v-model="username">
            <span v-if="usernameAlert" :class="$style['alert-msg']">Username only includes characters, numbers, and underscore.</span>

            <input id="password" class="roboto" name="password" placeholder="PASSWORD" tabindex="2" type="password" v-model="password">
            <span v-if="passwordAlert" :class="$style['alert-msg']">Password must be at least 8 characters long including lowercase and uppercase characters, numbers, and at least one special character.</span>
            <input id="password2" class="roboto" name="password2" placeholder="RETYPED PASSWORD" tabindex="3" type="password" v-model="password2">
            <span v-if="password2Alert" :class="$style['alert-msg']">Passwords mismatch.</span>

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
      username: '',
      password: '',
      password2: '',
    }
  },
  computed: {
    usernameAlert() {
      if (/\W/.test(this.username)) {
        return true;
      }
      return false;
    },
    passwordAlert() {
      if (// 8 characters
        this.password.length >= 8 &&
        // at least one lowercase
        /[a-z]/.test(this.password) &&
        // at least one uppercase
        /[A-Z]/.test(this.password) &&
        // at least one number
        /[0-9]/.test(this.password) &&
        // at least one special character
        /[\W_]/.test(this.password)
      ) {
        return false;
      }
      return true;
    },
    password2Alert() {
      if (this.password === this.password2) {
        return false;
      }
      return true;
    }
  },
  methods: {
    showModal() {
      this.$modal.show('sign-in-modal');
    },
    signIn() {
      let username = document.getElementById('username').value;
      let password = document.getElementById('password').value;
      this.$store.dispatch('signIn', {username, password});
    },
    signUp() {
      let username = document.getElementById('username').value;
      let password = document.getElementById('password').value;
      let password2 = document.getElementById('password2').value;
      this.$store.dispatch('signUp', {username, password, password2});
    },
    toSignUp() {
      document.querySelector('#signin-form').style["display"] = "none";
      document.querySelector('#signup-form').style["display"] = "flex";
    },
    backToSignIn() {
      document.querySelector('#signin-form').style["display"] = "flex";
      document.querySelector('#signup-form').style["display"] = "none";
    },
    closeModal() {
      this.username = '';
      this.password = '';
      this.password2 = '';
    }
  }
}
</script>

<style module>
.alert-msg {
  color: red;
  font-size: 12px;
}

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