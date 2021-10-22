<template>
  <div :class="$style['option-container']">
    <h3 :class="$style.title" class="roboto">{{ items.itemName }}</h3>
    <FilterOption v-for="(item, i) in items.itemList" :key="i"
                  :class="$style['radio-option']"
                  :title="items.itemName"
                  :value="item.value" class="roboto"/>
    <hr>
  </div>
</template>

<script>
import FilterOption from "./FilterOption";

export default {
  name: 'FilterOptionSection',
  components: {FilterOption},
  data() {
    return {
      items: {
        itemName: 'Price',
        itemList: [
          {
            value: '$$$',
          },
          {
            value: '$$',
          },
          {
            value: '$',
          },
        ]
      }
    }
  }
}
</script>

<style module>
.radio-option {
  margin: 5px;
  font-size: 18px;
}

.option-container {
  max-width: 200px;
}

.title {
  margin-left: 10px;
}

hr {
  max-width: 90%;
  border: 1px solid #cdcdcd;
  border-bottom: none;
}
</style>