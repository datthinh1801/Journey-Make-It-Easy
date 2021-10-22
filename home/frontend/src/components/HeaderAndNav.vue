<template>
  <div>
    <Header/>
    <NavBar id="nav-bar"/>
  </div>
</template>

<script>
import Header from "./Header";
import NavBar from "./NavBar";

export default {
  name: 'HeaderAndNav',
  components: {NavBar, Header},
}
</script>

<style>
#nav-bar {
  margin-top: 60px;
}
</style>