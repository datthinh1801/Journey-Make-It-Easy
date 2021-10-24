<template>
  <div>
    <HeaderAndNav/>
    <TopAttractionsSection place="Da Lat"/>
  </div>
</template>

<script>
import TopAttractionsSection from "../components/TopAttractionsSection";
import HeaderAndNav from "../components/HeaderAndNav";

export default {
  name: 'Attractions',
  components: {HeaderAndNav, TopAttractionsSection,},
  data() {
    return {}
  },
  mounted() {
    this.$store.commit('changePath', '/attractions');
  },
  beforeDestroy() {
    this.$store.commit('clearAllAttractions');
  }
}
</script>

<style>
</style>