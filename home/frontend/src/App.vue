<template>
  <div id="app">
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import {
  library
} from "@fortawesome/fontawesome-svg-core";
import {
  faCaretUp
} from "@fortawesome/free-solid-svg-icons";

library.add(faCaretUp);

export default {
  name: 'App',
  components: {Footer,}
}
</script>

<style scoped>
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
