<template>
  <div :class="$style['col-container']">
    <FilterOptionSection :filterType="firstFilterGroup" :isRestaurants="isRestaurants" />
    <FilterOptionSection :filterType="secondFilterGroup" :isRestaurants="isRestaurants" />
    <FilterOptionSection :filterType="thirdFilterGroup" :isRestaurants="isRestaurants" />
    <FilterOptionSection :filterType="fourthFilterGroup" :isRestaurants="isRestaurants" />
  </div>
</template>

<script>
import FilterOptionSection from "./FilterOptionSection";

export default {
  name: 'FilterPanel',
  components: {
    FilterOptionSection
  },
  data() {
    return {}
  },
  computed: {
    isRestaurants() {
      return this.$route.name === 'Restaurants';
    },
    firstFilterGroup() {
      return 'ratingScore';
    },
    secondFilterGroup() {
      if (this.isRestaurants) {
        return 'priceRange';
      }
      return 'roomTypes';
    },
    thirdFilterGroup() {
      if (this.isRestaurants) {
        return 'cuisines'
      }
      return 'roomFeatures';
    },
    fourthFilterGroup() {
      if (this.isRestaurants) {
        return 'specialDiets';
      }
      return 'propertyAmenities';
    },
  }
}
</script>

<style module>
div.col-container {
  width: 200px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px 10px;
  height: fit-content;
}

</style>
