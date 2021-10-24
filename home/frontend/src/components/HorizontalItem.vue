<template>
  <div :class="$style['item-container']"
       :style="{height: itemHeight, width:itemWidth}">
    <div :class="$style['img-container']">
      <img :class="$style['item-img']"
           alt="item-img" :src="imgSrc"
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
  props: ['itemName', 'imgSrc', 'imgHeight', 'imgWidth', 'itemHeight', 'itemWidth'],
}
</script>

<style module>
.item-container {
  display: flex;
  border: 1px solid #777;
  border-radius: 4px;
  margin-bottom: 5px;
  /*height: 200px;*/
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
</style>