<template>
  <div class="row-container width-control">
    <p class="roboto title">Traveller's picks</p>
    <FeaturedDestinations/>
  </div>
</template>

<script>
import FeaturedDestinations from "./FeaturedDestinations";

export default {
  name: 'FeaturedDestinationsSection',
  components: {
    FeaturedDestinations,
  }
}
</script>

<style scoped>
@import "../styles/global.css";

div.row-container {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
}
</style>