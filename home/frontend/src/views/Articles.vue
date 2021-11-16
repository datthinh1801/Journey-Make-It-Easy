<template>
  <div>
    <HeaderAndNav />
    <section :class="$style['articles-section']">
      <div :class="$style['heading']">
        <h1 :class="$style.head">All Articles</h1>
        <span @click="edit">Write a post</span>
      </div>
      <hr />
      <div :class="$style['articles-container']">
        <div
          v-for="article in articles"
          :key="article.id"
          :class="$style.article"
        >
          <div :class="$style.info">
            <h2 class="roboto">{{ article.title }}</h2>
            <div class="roboto" :class="$style['pre-content']">
              {{ article.content.substr(0, 50) + "..." }}
            </div>
            <div :class="$style.author" class="roboto">
              By {{ article.user.username }}
            </div>
          </div>
          <img src="images/placeholder_img.png" alt="article-img" />
        </div>
      </div>
      <LoadMoreButton v-if="hasItems" @click.native="loadMore" />
    </section>
  </div>
</template>

<script>
import HeaderAndNav from "../components/HeaderAndNav";
import LoadMoreButton from "../components/LoadMoreButton";

export default {
  name: "Articles",
  components: { LoadMoreButton, HeaderAndNav },
  data() {
    return {
      max_items: 10,
    };
  },
  computed: {
    articles() {
      return this.$store.state.articleArr.slice(0, this.max_items);
    },
    hasItems() {
      return this.max_items < this.$store.state.articleArr.length;
    },
  },
  methods: {
    loadMore() {
      this.max_items += 10;
    },
    edit() {
      this.$router.push("/article-editor");
    },
  },
  beforeCreate() {
    this.$store.dispatch("getAllArticles");
  },
  beforeMount() {
    document.title = "Articles";
  },
  beforeDestroy() {
    this.$store.commit("clearAllArticles");
  },
};
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

.heading {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.heading span {
  color: #888;
  font-style: italic;
  cursor: pointer;
}

.heading span:hover {
  text-decoration: underline;
}
</style>