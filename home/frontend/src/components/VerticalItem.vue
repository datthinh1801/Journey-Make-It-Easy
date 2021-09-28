<template>
  <div :class="$style.item">
    <div :class="$style.image">
      <img :alt="imgSrc" :src="imgSrc">
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
  props: ['imgSrc', 'itemName', 'itemDescription']
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
  max-width: 100%;
  max-height: 100%;
}

.info {

}

.heart-btn {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>