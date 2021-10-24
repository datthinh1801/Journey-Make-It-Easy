<template>
  <div :class="[$style.item]">
    <div :class="[$style.image, $style.skeleton]">
      <img :alt="imgSrc" :src="imgSrc" :style="{width: imgWidth, height: imgHeight}">
      <HeartButton :class="$style['heart-btn']"/>
    </div>
    <div :class="$style.info">
      <h4>
        {{ itemName }}
      </h4>
      <div>
        {{ itemDescription }}
      </div>
    </div>
  </div>
</template>

<script>
import HeartButton from "./HeartButton";

export default {
  name: 'VerticalItem',
  components: {HeartButton},
  props: ['imgSrc', 'itemName', 'itemDescription', 'imgWidth', 'imgHeight'],
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

.info {
}

.info h4 {
  margin-top: 10px;
}

.heart-btn {
  position: absolute;
  right: 10px;
  top: 10px;
}

/*https://www.geeksforgeeks.org/how-to-create-skeleton-screen-loading-effect-using-css/*/
/*TODO: Build the skeleton*/
</style>