<template>
  <div class="row-container width-control" :class="$style['row-container']">
    <p class="roboto title">Your recent searches</p>
    <RecentSearches/>
  </div>
</template>

<script>
import RecentSearches from "./RecentSearches";

export default {
  name: 'RecentSearchesSection',
  components: {
    RecentSearches,
  }
}
</script>

<style module>
.row-container {
  margin-top: 30px;
  flex-direction: column;
}
</style>