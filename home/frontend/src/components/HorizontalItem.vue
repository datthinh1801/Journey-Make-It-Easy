<template>
  <div :class="$style['item-container']"
       :style="{height: itemHeight, width:itemWidth}">
    <div :class="$style['img-container']">
      <img :class="$style['item-img']"
           alt="" :src="imgSrc"
           :style="{height: imgHeight, width: imgWidth}">
      <HeartButton :class="$style['heart-btn']"/>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import HeartButton from "./HeartButton";

export default {
  name: 'HorizontalItem',
  components: {HeartButton},
  props: ['imgSrc', 'imgHeight', 'imgWidth', 'itemHeight', 'itemWidth'],
}
</script>

<style module>
.item-container {
  display: flex;
  border: 1px solid #777;
  border-radius: 4px;
  margin-bottom: 5px;
  cursor: pointer;
}

.item-container:hover .img-container {
  opacity: 0.8;
}

.item-container:hover h3 {
  text-decoration: underline;
}

.img-container {
  position: relative;
}

.heart-btn {
  position: absolute;
  top: 5px;
  right: 5px;
}

.item-img:empty {
  background-image: linear-gradient(90deg, #eee 8%, #dadada 18%, #eee 33%);
  animation: skeletonLoading 1.2s linear infinite;
  animation-fill-mode: backwards;
  animation-delay: 0.2s;
  background-size: 200% 200%;
}

@keyframes skeletonLoading {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: -200% 0%;
  } 
}
</style>