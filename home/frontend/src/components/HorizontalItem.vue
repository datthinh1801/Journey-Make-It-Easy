<template>
  <div :class="$style['item-container']" :style="{height: itemHeight}">
    <div :class="$style['img-container']">
      <img :class="$style['item-img']" alt="item-img" :src="imgSrc" :style="{height: imgHeight, width: imgWidth}">
      <HeartButton :class="$style['heart-btn']"/>
    </div>
    <div :class="$style['detail-container']">
      <h3>{{ itemName }}</h3>
      <RatingSection star-count="5"/>
      <hr>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import HeartButton from "./HeartButton";
import RatingSection from "./RatingSection";

// https://stackoverflow.com/questions/42992579/is-it-possible-to-pass-a-component-as-props-and-use-it-in-a-child-component-in-v
export default {
  name: 'HorizontalItem',
  components: {RatingSection, HeartButton},
  props: ['itemName', 'imgSrc', 'imgHeight', 'imgWidth', 'itemHeight'],
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

.item-container:hover .detail-container h3 {
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

.detail-container {
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
}

.detail-container h3 {
  margin: 10px 0;
}

.detail-container hr {
  width: 100%;
  max-width: 100%;
}
</style>