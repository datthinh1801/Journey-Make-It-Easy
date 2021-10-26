<template>
  <div :class="[$style.item]">
    <div :class="[$style.image]">
      <img :alt="imgSrc" :src="imgSrc"
           :style="{width: imgWidth, height: imgHeight}">
      <HeartButton :class="$style['heart-btn']"/>
    </div>
      <slot></slot>
  </div>
</template>

<script>
import HeartButton from "./HeartButton";

export default {
  name: 'VerticalItem',
  components: {HeartButton},
  props: ['imgSrc', 'imgWidth', 'imgHeight'],
  data() {
    return {}
  }
}
</script>

<style module>
.item {
  cursor: pointer;
  transition: 0.3s;
}

.item:hover {
  opacity: 0.8;
  text-decoration-line: underline;
}

.image {
  position: relative;
}

.image img {
  object-fit: cover;
}

.heart-btn {
  position: absolute;
  right: 10px;
  top: 10px;
}

/*https://www.geeksforgeeks.org/how-to-create-skeleton-screen-loading-effect-using-css/*/
/*TODO: Build the skeleton*/
</style>