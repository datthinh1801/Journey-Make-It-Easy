<template>
  <div>
    <img alt="featured-destination-img" src="placeholder_img.png">
    <HeartButton class="heart-btn"/>
    <div class="item-info">
      <strong class="roboto">Shelborne South Beach</strong>
    </div>
  </div>
</template>

<script>
import HeartButton from "./HeartButton";

export default {
  name: 'FeaturedDestination',
  components: {
    HeartButton,
  }
}
</script>

<style scoped>
@import "../styles/global.css";

div {
  position: relative;
}

.heart-btn {
  position: absolute;
  top: 5px;
  right: 5px;
}

img {
  max-width: 240px;
  max-height: 240px;
}

.item-info strong {
  font-size: 18px;
}
</style>