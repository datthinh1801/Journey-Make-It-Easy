<template>
  <div :class="[$style.item]">
    <div :class="[$style.image]">
      <img alt="" :src="imgSrc"
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
}

.image {
  position: relative;
}

.image img {
  object-fit: cover;
}

.image img:empty {
  background-image: linear-gradient(#eee 8%, #dadada 18%, #eee 33%);
  animation: skeletonLoading 1.2s linear infinite;
  animation-fill-mode: backwards;
  animation-delay: 0.2s;
  background-size: 200% 200%;
}

@keyframes skeletonLoading {
  0% {
    background-position: 50% 0%;
  }

  100% {
    background-position: 0% -200%;
  }
}

.heart-btn {
  position: absolute;
  right: 1px;
  top: 8px;
}
</style>