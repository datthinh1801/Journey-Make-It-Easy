<template>
  <div class="item-list" :class="$style['recent-searches-container']">
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

<style module>
.recent-searches-container {
  width: 100%;
}
</style>