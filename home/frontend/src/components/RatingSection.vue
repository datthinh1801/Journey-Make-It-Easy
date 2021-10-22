<template>
  <div>
    <Stars :starCount="starCount"/>
    <!--Review counts go here-->
  </div>
</template>

<script>
import Stars from "./Stars";

export default {
  name: 'RatingSection',
  props: ['starCount'],
  components: {
    Stars,
  }
}
</script>

<style>

</style>