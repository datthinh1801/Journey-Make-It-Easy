<template>
  <div>
    <Header/>
    <NavBar :class="$style.navbar"/>
    <TopAttractionsSection place="Da Lat"/>
  </div>
</template>

<script>
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import TopAttractionsSection from "../components/TopAttractionsSection";

export default {
  name: 'Attractions',
  components: {TopAttractionsSection, NavBar, Header},
  data() {
    return {
      items: {
        itemName: 'Item 1',
        imgSrc: 'images/placeholder_img.png'
      }
    }
  }
}
</script>

<style module>
.navbar {
  margin-top: 60px;
}
</style>