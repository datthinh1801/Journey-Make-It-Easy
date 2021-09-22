<template>
  <div class="item-list">
    <RecentSearch v-for="n in 4" :key="n"/>
  </div>
</template>

<script>
import RecentSearch from "./RecentSearch";

export default {
  name: 'RecentSearches',
  components: {
    RecentSearch,
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
@import "../styles/global.css";
</style>