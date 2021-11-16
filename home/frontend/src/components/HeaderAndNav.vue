<template>
  <div>
    <Header/>
    <NavBar :id="$style['nav-bar']"/>
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

<style module>
#nav-bar {
  margin-top: 80px;
}
</style>