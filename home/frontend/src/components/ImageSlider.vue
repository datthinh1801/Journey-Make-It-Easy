<template>
    <vue-flux :options="vfOptions" :images="images" :transitions="vfTransitions" ref="slider"
        :class="$style['overview-image']">

        <template v-slot:preloader>
            <flux-preloader />
        </template>

        <template v-slot:pagination>
            <flux-pagination />
        </template>
    </vue-flux>
</template>

<script>
import {
    VueFlux,
    FluxPagination,
    FluxPreloader,
} from 'vue-flux';
export default {
    name: 'ImageSlider',
    props: ['images'],
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
            },
            vfTransitions: ['slide'],
        }
    },
}
</script>

<style module>
.overview-image {
  width: 100%;
  height: 500px;
  border: 1px solid #ccc;
  z-index: 0;
}
</style>
