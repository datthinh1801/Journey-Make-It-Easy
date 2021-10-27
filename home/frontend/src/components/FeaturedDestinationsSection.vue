<template>
  <div class="row-container width-control" :class="$style['row-container']">
    <p class="roboto title">Traveller's Favorite Destinations</p>
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

<style module>
.row-container {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
}
</style>