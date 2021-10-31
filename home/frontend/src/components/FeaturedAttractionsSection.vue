<template>
  <div class="row-container width-control" :class="$style['row-container']">
    <p class="roboto title">Touristy Attractions</p>
    <featured-attractions/>
  </div>
</template>

<script>
import FeaturedAttractions from './FeaturedAttractions.vue'

export default {
  name: 'FeaturedAttractionsSection',
  components: {
    FeaturedAttractions,
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