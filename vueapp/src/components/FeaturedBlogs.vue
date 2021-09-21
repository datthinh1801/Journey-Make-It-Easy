<template>
  <div class="row-container">
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

<style scoped>
@import "../styles/global.css";

.row-container {
  justify-content: space-between;
  padding: 0;
  width: 1000px;
}
</style>