<template>
  <div v-if="!isFetching" class="width-control">
    <header-and-nav />
    <div :class="$style['blog-container']">
      <h1>{{ title }}</h1>
      <div v-html="content" :class="$style['blog-content']"></div>
    </div>
  </div>
</template>

<script>
import HeaderAndNav from "../components/HeaderAndNav.vue";
export default {
  components: { HeaderAndNav },
  computed: {
    title() {
      return this.$store.state.item.title;
    },
    content() {
      return this.$store.state.item.content;
    },
    isFetching() {
      return !this.$store.state.item["id"];
    },
  },
  beforeCreate() {
    if (!this.$store.state.currentItemId) {
      this.$router.push("/articles");
    } else {
      this.$store.dispatch("getArticleDetail", this.$store.state.currentItemId);
    }
  },
  beforeMount() {
      document.title = `📮 Blog | ${this.$store.state.item.title}`;
  }
};
</script>

<style module>
.blog-container {
  margin-top: 20px;
}

.blog-container h1 {
  text-align: center;
}
</style>