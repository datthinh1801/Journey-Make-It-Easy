<template>
  <div>
    <HorizontalItem v-for="i in count" :key="i"
                    :item-name="itemName"
                    :img-src="imgSrc"
    />
  </div>
</template>

<script>
import HorizontalItem from "./HorizontalItem";

export default {
  name: 'ItemListSection',
  components: {HorizontalItem},
  data() {
    return {
      count: 6,
      itemName: 'Wooden House',
      imgSrc: 'images/placeholder_img.png',
    }
  }
}
</script>

<style module>

</style>