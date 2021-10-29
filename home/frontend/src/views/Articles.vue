<template>
  <div>
    <HeaderAndNav/>
    <section :class="$style['articles-section']">
      <h1 :class="$style.head">All Articles</h1>
      <hr>

      <div :class="$style['articles-container']">
        <div v-for="(article, i) in articles" :key="i"
             :class="$style.article">
          <div :class="$style.info">
            <h2 class="roboto">{{ article.title }}</h2>
            <div class="roboto" :class="$style['pre-content']">{{ article.body.substr(0, 50) + '...' }}</div>
            <div :class="$style.author" class="roboto">By {{ author }}</div>
          </div>
          <img src="images/placeholder_img.png" alt="article-img">
        </div>
      </div>
      <LoadMoreButton/>
    </section>
  </div>
</template>

<script>
import HeaderAndNav from "../components/HeaderAndNav";
import LoadMoreButton from "../components/LoadMoreButton";

export default {
  name: 'Articles',
  components: {LoadMoreButton, HeaderAndNav},
  data() {
    return {
      author: 'Thinh, Nguyen Dat',
    }
  },
  computed: {
    articles() {
      return this.$store.state.articleArr;
    }
  },
  methods: {},
  mounted() {
    this.$store.commit('changePath', '/articles');
    this.$store.dispatch('getAllArticles');
  },
  beforeDestroy() {
    this.$store.commit('clearAllArticles');
  }
}
</script>
<style module>
.articles-section {
  width: 600px;
  margin: auto;
}

.articles-section h1.head {
  margin-bottom: 0;
}

.articles-section hr {
  width: 100%;
  max-width: 100%;
  border: 1px solid black;
}

h1.head {
  text-align: left;
}

.article {
  height: 250px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  cursor: pointer;
}

.article .info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.article img {
  height: 100%;
  width: auto;
  object-fit: cover;
  margin-left: 10px;
}

.article .info h2 {
  margin-bottom: 0;
}

.article:hover .info h2 {
  text-decoration: underline;
}

.article .pre-content {
  color: #777;
  font-size: 18px;
}

.article .author {
  color: #777;
}
</style>