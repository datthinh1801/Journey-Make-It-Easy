<template>
  <div :class="$style['grid-container']">
    <VerticalItem v-for="n in 4" :key="n" :imgSrc="item.imgSrc" :itemName="item.name"/>
  </div>
</template>

<script>
import VerticalItem from "./VerticalItem";

export default {
  name: 'FeaturedDestinations',
  components: {
    VerticalItem,
  },
  data() {
    return {
      item: {
        name: 'Item',
        imgSrc: 'images/placeholder_img.png'
      }
    }
  }
}
</script>

<style module>
@import "../styles/global.css";

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
}
</style>