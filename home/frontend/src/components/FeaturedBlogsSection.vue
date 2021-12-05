<template>
  <div :class="$style.container" v-if="hasArticles">
    <h2 class="width-control">New Traveling Articles</h2>
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
  computed: {
    hasArticles() {
      return this.$store.state.articleArr.length > 0;
    },
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

@media only screen and (max-width: 500px) {
  .container h2 {
    width: 90%;
    font-size: 20px;
  }
}
</style>