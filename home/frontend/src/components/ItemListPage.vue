<template>
  <div>
    <Header/>
    <NavBar/>
    <h1>{{ title }}</h1>
    <div :class="$style['content-list']">
      <FilterPanel id="filter-panel"/>
      <ItemListSection id="item-list-section"/>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import FilterPanel from "./FilterPanel";
import ItemListSection from "./ItemListSection";

export default {
  name: 'ItemListPage',
  components: {ItemListSection, FilterPanel, NavBar, Header},
  props: ['title'],
}
</script>

<style module>
nav {
  margin-top: 60px;
}

.content-list {
  display: flex;
  justify-content: center;
}
</style>