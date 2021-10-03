<template>
  <div>
    <HeaderAndNav/>
    <h1>Restaurants in {{ place }}</h1>
    <div :class="$style['content-list']">
      <FilterPanel id="filter-panel"/>
      <ItemListSection id="item-list-section"/>
    </div>
  </div>
</template>

<script>
import HeaderAndNav from "../components/HeaderAndNav";
import FilterPanel from "../components/FilterPanel";
import ItemListSection from "../components/ItemListSection";

export default {
  name: 'Restaurants',
  components: {HeaderAndNav, FilterPanel, ItemListSection},
  // props: ['place'],
  data() {
    return {
      place: 'Da Lat',
    }
  }
}
</script>

<style module>
.content-list {
  display: flex;
  justify-content: center;
}
</style>