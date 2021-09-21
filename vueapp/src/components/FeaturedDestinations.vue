<template>
  <div class="container item-list">
    <div v-for="n in 4" :key="n">
      <FeaturedDestination/>
    </div>
  </div>
</template>

<script>
import FeaturedDestination from "./FeaturedDestination";

export default {
  name: 'FeaturedDestinations',
  components: {
    FeaturedDestination,
  }
}
</script>

<style scoped>
@import "../styles/global.css";
</style>