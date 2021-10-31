<template>
    <vue-flux :options="vfOptions" :images="this.images" :transitions="vfTransitions" ref="slider"
        :class="$style['overview-image']">

        <template v-slot:preloader>
            <flux-preloader />
        </template>

        <template v-slot:controls>
            <flux-controls />
        </template>

        <template v-slot:pagination>
            <flux-pagination />
        </template>

        <template v-slot:index>
            <flux-index />
        </template>
    </vue-flux>
</template>

<script>
import {
    VueFlux,
    FluxControls,
    FluxIndex,
    FluxPagination,
    FluxPreloader,
} from 'vue-flux';
export default {
    name: 'ImageSlider',
    props: ['images'],
    components: {
        VueFlux,
        FluxControls,
        FluxIndex,
        FluxPagination,
        FluxPreloader,
    },
    data() {
        return {
            vfOptions: {
                autoplay: true,
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
