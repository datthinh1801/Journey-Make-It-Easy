<template>
  <div>
    <div :class="$style.image">
      <img :src="imgSrc" :alt="imgSrc">
    </div>
    <div :class="$style.info">
      <h4>{{ itemName }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendationItem',
  props: ['imgSrc', 'itemName'],
}
</script>

<style module>
.image {
  width: 200px;
  height: 200px;
}

.image img {
  width: 100%;
  height: 100%;
  transition: 0.2s;
}

.image img:hover {
  overflow: hidden;
}
</style>