<template>
  <div>
    <HeaderAndNav/>
    <h1 :class="$style.head">Restaurants in {{ place }}</h1>
    <div :class="$style['content-list']">
      <FilterPanel :id="$style['filter-panel']"/>
      <ItemListSection :id="$style['item-list-section']"/>
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
h1.head {
  text-align: center;
}

.content-list {
  display: flex;
  justify-content: center;
}

#filter-panel {

}

#item-list-section {
  width: 500px;
  margin-left: 10px;
}
</style>