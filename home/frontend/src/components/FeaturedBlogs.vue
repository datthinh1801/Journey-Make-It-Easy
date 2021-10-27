<template>
  <div class="row-container item-list width-control" :class="$style['row-container']">
    <FeaturedBlog v-for="n in 3" :key="n"/>
  </div>
</template>

<script>
import FeaturedBlog from "./FeaturedBlog";

export default {
  name: 'FeaturedBlogs',
  components: {
    FeaturedBlog,
  }
}
</script>

<style module>
.row-container {
  width: 1000px;
}
</style>