<template>
  <div :class="$style['footer-container']">
    <hr />
    <div class="width-control" :class="$style.footer">
      <div class="logo no-select" :class="$style['logo-footer']">
        Journey: Make it easy
      </div>
      <span :class="$style['all-right-reserved']"
        >{{ thisYear }} &copy; All rights reserved</span
      >
      <div :class="$style['sns']">
        <span>Powered by</span>
        <font-awesome-icon :icon="['fab', 'python']" />
        <font-awesome-icon :icon="['fab', 'vuejs']" />
      </div>
    </div>
  </div>
</template>

<style module>
.footer-container {
  padding: 10px 0;
}

.footer-container hr {
  max-width: 100%;
  width: 1000px;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-footer {
  font-family: "Pacifico", cursive;
  font-size: 22px;
  color: #f9c100;
}

.sns {
  font-size: 24px;
  display: flex;
  align-items: center;
  color: #888;
}

.sns span {
  font-size: 16px;
  margin-right: 5px;
}

@media only screen and (max-width: 500px) {
  .footer-container {
    padding: 5px 0;
  }

  .footer-container hr {
    width: 100%;
  }

  .logo-footer {
    font-size: 14px;
  }

  .sns {
    font-size: 16px;
  }

  .sns span {
    font-size: 12px;
  }

  .all-right-reserved {
    font-size: 8px;
  }
}

@media only screen and (max-width: 500px) {
  .logo-footer {
    font-family: "Pacifico", cursive;
    font-size: 15px;
    color: #f9c100;
  }
  .sns {
    font-size: 15px;
    display: flex;
    align-items: center;
    color: #888;
  }
  .footer-container {
    padding: 10px 0;
    height: 10px;
  }
}
</style>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPython, faVuejs } from "@fortawesome/free-brands-svg-icons";

library.add(faPython, faVuejs);

export default {
  name: "Footer",
  components: {},
  data() {
    return {};
  },
  computed: {
    thisYear() {
      return new Date().getFullYear();
    },
  },
  methods: {},
};
</script>