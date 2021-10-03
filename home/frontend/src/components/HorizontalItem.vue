<template>
  <div :class="$style['item-container']">
    <div :class="$style['img-container']">
      <img :class="$style['item-img']" alt="item-img" src="images/placeholder_img.png">
      <HeartButton :class="$style['heart-btn']"/>
    </div>
    <div>
      <h4>Wooden House</h4>
      <RatingSection/>
      <!--Price, review, features-->
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
}
</script>

<style module>
.item-container {
  display: flex;
}

.img-container {
  position: relative;
}

.item-img {
  max-width: 200px;
  max-height: 200px;
}

.heart-btn {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>