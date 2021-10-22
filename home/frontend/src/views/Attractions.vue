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
    return {
      items: {
        itemName: 'Item 1',
        imgSrc: 'images/placeholder_img.png'
      }
    }
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