<template>
  <div class="row-container width-control">
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

<style scoped>
div.row-container {
  margin-top: 30px;
  padding-left: 40px;
  flex-direction: column;
}
</style>