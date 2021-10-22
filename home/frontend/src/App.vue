<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {library} from "@fortawesome/fontawesome-svg-core";
import {faCaretUp} from "@fortawesome/free-solid-svg-icons";

library.add(faCaretUp);

export default {
  name: 'App',
  components: {}
}
</script>

<style scoped>
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
