<template>
  <vue-flux
    :options="vfOptions"
    :images="renderImages"
    :transitions="vfTransitions"
    ref="slider"
    :class="$style['overview-image']"
  >
    <template v-slot:preloader>
      <flux-preloader />
    </template>

    <template v-slot:pagination>
      <flux-pagination />
    </template>
  </vue-flux>
</template>

<script>
import { VueFlux, FluxPagination, FluxPreloader } from "vue-flux";
export default {
  name: "ImageSlider",
  components: {
    VueFlux,
    FluxPagination,
    FluxPreloader,
  },
  data() {
    return {
      vfOptions: {
        autoplay: true,
        lazyLoadAfter: 2,
        enableGestures: true,
      },
      vfTransitions: ["slide"],
    };
  },
  computed: {
    renderImages() {
      let imgs = this.$store.state.item.images.map((img) => img.link);
      for (let i = 0; i < imgs.length; ++i) {
        imgs[i] = imgs[i]
          .replace("https://media-cdn", "https://dynamic-media-cdn")
          .replace(/\.jpg[\w\W]*/, ".jpg?w=1000&h=500&s=1");
      }
      return imgs;
    },
  },
};
</script>

<style module>
.overview-image {
  width: 100%;
  height: 500px;
  border: 1px solid #ccc;
  z-index: 0;
}

@media only screen and (max-width: 500px) {
  .overview-image {
    height: 300px;
  }
}
</style>
