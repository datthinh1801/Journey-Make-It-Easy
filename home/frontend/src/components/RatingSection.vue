<template>
  <div>
    <Stars v-if="ratingCount > 0" :starCount="starCount"/>
    <div v-else :class="$style.else">No review yet</div>
    <!--Review counts go here-->
  </div>
</template>

<script>
import Stars from "./Stars";

export default {
  name: 'RatingSection',
  props: ['starCount', 'ratingCount'],
  components: {
    Stars,
  }
}
</script>

<style module>
.else {
  color: #777;
}
</style>