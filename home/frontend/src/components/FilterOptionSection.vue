<template>
  <div :class="$style['option-container']">
    <h3 :class="$style.title" class="roboto">{{ designedFilterType }}</h3>
    <FilterOption v-for="(item, i) in items" :key="i"
                  :class="$style['checkbox-option']"
                  :title="designedFilterType"
                  :value="item" class="roboto"/>
    <hr class="hr-filter-panel">
  </div>
</template>

<script>
import FilterOption from "./FilterOption";

export default {
  name: 'FilterOptionSection',
  props: ['filterType', 'isRestaurants'],
  components: {
    FilterOption
  },
  data() {
    return {}
  },
  computed: {
    itemArray() {
      if (this.isRestaurants) {
        return this.$store.state.restaurantArr;
      } else {
        return this.$store.state.hotelArr;
      }
    },
    designedFilterType() {
      if (this.filterType === 'priceRange') {
        return 'Price';
      } else if (this.filterType === 'ratingScore') {
        return 'Rating';
      } else if (this.filterType === 'cuisines') {
        return 'Cuisines';
      } else if (this.filterType === 'specialDiets') {
        return 'Special Diets';
      } else if (this.filterType === 'roomFeatures') {
        return 'Room Features';
      } else if (this.filterType === 'roomTypes') {
        return 'Room Types';
      } else {
        return 'Amenities';
      }
    },
    items() {
      let itemSet = new Set();
      this.itemArray.forEach(item => {
        // cast to String in case rating score is filtered
        let subItems = item[this.filterType].map(item => item['value']).filter(item => item.length > 0);
        subItems.forEach(subItem => {
          itemSet.add(subItem);
        });
      });
      return itemSet;
    }
  }
}
</script>

<style module>
.checkbox-option {
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