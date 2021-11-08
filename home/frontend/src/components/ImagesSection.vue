<template>
  <div class="width-control">
    <image-slider :images="images"/>
  </div>
</template>

<script>
import ImageSlider from './ImageSlider.vue';
export default {
  components: {
    ImageSlider
  },
  name: 'ImagesSection',
  computed: {
    images() {
      const imgs = this.$store.state.item;
      console.log(imgs);
      return imgs;
    }
  }
}
</script>

<style module>
</style>