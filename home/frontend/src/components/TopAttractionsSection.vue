<template>
  <div>
    <h1 :class="$style.header">Top Attractions in {{ place }}</h1>
    <div :class="$style['content-container']" class="width-control">
      <VerticalItem v-for="i in 9" :key="i" :class="$style['grid-item']" :imgSrc="items.imgSrc" :itemName="items.name"/>
    </div>
  </div>
</template>

<script>
import VerticalItem from "./VerticalItem";

export default {
  name: 'TopAttractionsSection',
  components: {VerticalItem},
  props: ['place'],
  data() {
    return {
      items: {
        name: 'Item 1',
        imgSrc: 'images/placeholder_img.png',
      }
    }
  }
}
</script>

<style module>
h1.header {
  text-align: center;
}

.content-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-left: auto;
  margin-right: auto;
}

.grid-item {
  width: 100%;
  height: 100%;
}
</style>