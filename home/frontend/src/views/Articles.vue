<template>
  <div>
    <HeaderAndNav/>
  </div>
</template>

<script>
import HeaderAndNav from "../components/HeaderAndNav";

export default {
  name: 'Articles',
  components: {HeaderAndNav},
  mounted() {
    this.$store.commit('changePath', '/articles');
  }
}
</script>
<style>

</style>