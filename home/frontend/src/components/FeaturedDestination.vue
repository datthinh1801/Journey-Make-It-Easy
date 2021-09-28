<template>
  <div>
    <img alt="featured-destination-img" src="images/placeholder_img.png">
    <HeartButton class="heart-btn"/>
    <div class="item-info">
      <strong class="roboto">Shelborne South Beach</strong>
      <RatingSection/>
    </div>
  </div>
</template>

<script>
import HeartButton from "./HeartButton";
import RatingSection from "./RatingSection";

export default {
  name: 'FeaturedDestination',
  components: {
    HeartButton,
    RatingSection
  }
}
</script>

<style scoped>
@import "../styles/global.css";

div:not(.item-info) {
  position: relative;
  cursor: pointer;
}

img {
  max-width: 240px;
  max-height: 240px;
}

.item-info strong {
  font-size: 18px;
}
</style>