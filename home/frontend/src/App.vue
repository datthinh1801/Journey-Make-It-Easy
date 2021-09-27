<template>
  <div id="app">
    <Header/>
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Header from "./components/Header";

export default {
  name: 'App',
  components: {
    Header,
    NavBar,
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
