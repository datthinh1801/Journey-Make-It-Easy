<template>
  <div>
    <button @click="showModal" v-if="!authenticated">Sign In</button>
    <div v-else :class="$style['userprofile-container']">
      <button :class="$style['userprofile']" @click="showProfile">
        <img src="https://i.pravatar.cc/50" alt="" :class="$style.avatar" />
        <div class="roboto">
          {{ usernameAuth }}
        </div>
      </button>
      <div
        v-show="expandProfile"
        :class="$style['expand-profile-container']"
        class="no-select"
        @click="logout"
      >
        <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
        <span>Log out</span>
      </div>
    </div>
    <modal
      name="sign-in-modal"
      @closed="closeModal"
      :width="modalWidth"
      :height="modalHeight"
      :adaptive="true"
    >
      <div :class="$style['signin-modal']">
        <div :class="$style.form">
          <div :class="$style['signin-form']" id="signin-form">
            <h3 class="no-select">Sign In</h3>
            <hr />
            <span v-if="invalidCredentials" :class="$style['alert-msg']"
              >Invalid username or password.</span
            >
            <input
              id="username"
              class="roboto"
              name="username"
              placeholder="USERNAME"
              tabindex="1"
              type="text"
              v-model="username"
            />
            <span v-if="usernameAlert" :class="$style['alert-msg']">{{
              usernameGuide
            }}</span>

            <input
              id="password"
              class="roboto"
              name="password"
              placeholder="PASSWORD"
              tabindex="2"
              type="password"
              v-model="password"
            />
            <span v-if="passwordAlert" :class="$style['alert-msg']">{{
              passwordGuide
            }}</span>
            <a href="/forgot-password" tabindex="4">Forgot your password?</a>

            <button
              :class="$style['signin-button']"
              tabindex="3"
              @click="signIn"
            >
              Sign In
            </button>
            <div :class="$style.or"><span class="no-select">Or</span></div>
            <button
              :class="$style['signin-button']"
              tabindex="5"
              @click="toSignUp"
            >
              Sign Up
            </button>
          </div>

          <div
            :class="$style['signin-form']"
            style="display: none"
            id="signup-form"
          >
            <h3 class="no-select">Sign Up</h3>
            <hr />
            <input
              id="username"
              class="roboto"
              name="username"
              placeholder="USERNAME"
              tabindex="1"
              type="text"
              v-model="username"
            />
            <span v-if="usernameAlert" :class="$style['alert-msg']">{{
              usernameGuide
            }}</span>
            <span v-if="usernameExisted" :class="$style['alert-msg']">{{
              existUsernameMsg
            }}</span>

            <input
              id="password"
              class="roboto"
              name="password"
              placeholder="PASSWORD"
              tabindex="2"
              type="password"
              v-model="password"
            />
            <span v-if="passwordAlert" :class="$style['alert-msg']">{{
              passwordGuide
            }}</span>
            <input
              id="password2"
              class="roboto"
              name="password2"
              placeholder="RETYPED PASSWORD"
              tabindex="3"
              type="password"
              v-model="password2"
            />
            <span v-if="password2Alert" :class="$style['alert-msg']"
              >Passwords mismatch.</span
            >

            <button
              :class="$style['signin-button']"
              tabindex="4"
              @click="signUp"
            >
              Sign Up
            </button>
          </div>
        </div>
        <img src="https://raw.githubusercontent.com/IxZZZ/img_project_web/main/signin_img.jpg" alt="" v-if="!isMobile" />
      </div>
    </modal>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faSignOutAlt,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
library.add(faAngleDown, faSignOutAlt, faAngleRight);

export default {
  name: "SigninButton",
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      usernameGuide:
        "Username only includes characters, numbers, and underscore.",
      passwordGuide:
        "Password must be at least 8 characters long including lowercase and uppercase characters, numbers, and at least one special character.",
      existUsernameMsg: "Username already exists!",
      usernameExisted: false,
      invalidCredentials: false,
      expandProfile: false,
      modalWidth: 700,
      modalHeight: 400,
      isMobile: false,
    };
  },
  computed: {
    usernameAlert() {
      if (/\W/.test(this.username)) {
        return true;
      }
      return false;
    },
    passwordAlert() {
      if (
        // 8 characters
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
    },
    authenticated() {
      return this.$store.state.username !== "";
    },
    usernameAuth() {
      return this.$store.state.username;
    },
  },
  methods: {
    showModal() {
      this.$store.state.modalUp = true;
      this.$modal.show("sign-in-modal");
    },
    async signIn() {
      if (this.usernameAlert || this.passwordAlert) {
        return;
      }

      let response = await this.$store.dispatch("signIn", {
        username: this.username,
        password: this.password,
      });

      if (response) {
        this.invalidCredentials = false;
        this.$modal.hide("sign-in-modal");
        location.reload();
      } else {
        this.invalidCredentials = true;
      }
    },
    signUp() {
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;
      let password2 = document.getElementById("password2").value;

      if (this.usernameAlert || this.passwordAlert || this.password2Alert) {
        return;
      }

      this.$store
        .dispatch("signUp", {
          username,
          password,
          password2,
        })
        .then((response) => {
          if (response) {
            this.backToSignIn();
          } else {
            this.usernameExisted = true;
          }
        });
    },
    toSignUp() {
      document.querySelector("#signin-form").style["display"] = "none";
      document.querySelector("#signup-form").style["display"] = "flex";
    },
    backToSignIn() {
      document.querySelector("#signin-form").style["display"] = "flex";
      document.querySelector("#signup-form").style["display"] = "none";
      this.usernameExisted = false;
    },
    closeModal() {
      this.username = "";
      this.password = "";
      this.password2 = "";
      this.$store.state.modalUp = false;
    },
    showProfile() {
      this.expandProfile = !this.expandProfile;
    },
    logout() {
      this.$store.dispatch("signOut");
    },
    resizeModal() {
      if (screen.width < 500) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.resizeModal);
    this.resizeModal();
  },
};
</script>

<style module>
.userprofile-container {
  position: relative;
}

.expand-profile-container {
  margin-left: 5px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;

  position: absolute;
  bottom: -55px;
  background-color: white;
  width: 100px;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border: 1px solid #ccc;
  border-top: none;
  padding: 10px 0;
}

.expand-profile-container span {
  margin-left: 5px;
}

.expand-profile-container:hover span {
  text-decoration: underline;
}

.userprofile {
  background-color: transparent;
  border: none;
  color: black;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: center;
}

.userprofile div {
  margin-left: 5px;
}

.userprofile:hover {
  background-color: transparent;
}

.userprofile:hover span:first-child {
  text-decoration: underline;
}

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
  content: "";
  height: 1px;
  background-color: #ccc;
}

.or::after {
  width: 100%;
  content: "";
  height: 1px;
  background-color: #ccc;
}

.form {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.signin-modal {
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
  background-color: #f9c100;
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
  background-color: #f9c100;
  border: none;
  transition: 0.3s;
  margin-right: 10px;
}

button:hover {
  background-color: #fdd039;
  border-color: #fdd039;
}

.avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}

@media only screen and (max-width: 800px) {
  button {
    width: 80px;
    height: 30px;
    font-size: 14px;
    margin-right: 20px;
  }

  .signin-modal {
    grid-template-columns: 1fr;
  }

  .userprofile-container {
    margin-right: 10px;
  }
}
</style>