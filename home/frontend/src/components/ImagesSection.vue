<template>
  <div class="width-control">
    <image-slider :images="images" v-if="images"/>
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
      let imgs = this.$store.state.item.images.map(img => img.link);
      for (let i = 0; i < imgs.length; ++i) {
        imgs[i] = imgs[i].replace('https://media-cdn', 'https://dynamic-media-cdn')
        .replace(/\.jpg[\w\W]*/, '.jpg?w=1000&h=500&s=1');
      }
      return imgs;
    }
  },
}
</script>