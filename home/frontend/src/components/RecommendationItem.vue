<template>
  <div>
    <div :class="$style.image">
      <img :alt="imgSrc" :src="imgSrc">
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
  margin-bottom: 0;
}

.image img {
  width: 100%;
  height: 100%;
  transition: 0.2s;
}

.image img:hover {
  opacity: 0.8;
  overflow: hidden;
}

h4 {
  margin-top: 10px;
}
</style>