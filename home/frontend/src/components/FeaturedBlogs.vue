<template>
  <div
    class="row-container item-list width-control"
    :class="$style['row-container']"
  >
    <FeaturedBlog
      v-for="article in articles"
      :key="article.id"
      :author="article.user.username"
      :title="article.title"
      :imgSrc="getImgSrc(article)"
      @click.native="redirectItem(article)"
    />
  </div>
</template>

<script>
import FeaturedBlog from "./FeaturedBlog";

export default {
  name: "FeaturedBlogs",
  components: {
    FeaturedBlog,
  },
  computed: {
    articles() {
      return this.$store.state.articleArr;
    },
  },
  methods: {
    getImgSrc(article) {
      return `https://source.unsplash.com/user/didiofederico_photographer/320x190?sig=${article.id}`;
    },
    redirectItem(item) {
      this.$store.commit('changeItemId', item.id);
      this.$router.push('/article');
    }
  }
};
</script>

<style module>
.row-container {
  width: 1000px;
}
</style>