<template>
  <div :class="$style.container">
    <h2 class="width-control">New traveling articles</h2>
    <div :class="$style['item-container']">
      <FeaturedBlogs />
    </div>
  </div>
</template>

<script>
import FeaturedBlogs from "./FeaturedBlogs";

export default {
  name: "FeaturedBlogsSection",
  components: {
    FeaturedBlogs,
  },
  beforeCreate() {
    this.$store.dispatch("getAllArticles", 3);
  },
};
</script>

<style module>
.container {
  margin-top: 50px;
  width: 100%;
  background-color: #cee3ff;
  padding: 30px 0;
}

.container h2 {
  margin-bottom: 20px;
}

.item-container {
  display: flex;
  align-items: center;
}
</style>