<template>
  <div>
    <HeaderAndNav />
    <section :class="$style['articles-section']">
      <div :class="$style['heading']">
        <h1 :class="$style.head">All Articles</h1>
        <div :class="$style['edit-btn']" @click="edit" v-if="authenticated">
          <font-awesome-icon :icon="'edit'" />
          <span> Write a post </span>
        </div>
      </div>
      <hr />
      <div :class="$style['articles-container']">
        <div
          v-for="article in articles"
          :key="article.id"
          :class="$style.article"
          @click="redirectItem(article)"
        >
          <div :class="$style.info">
            <h2 class="roboto">{{ article.title }}</h2>
            <div class="roboto" :class="$style['pre-content']">
              {{ getText(article.content).substr(0, 100) + " ..." }}
            </div>
            <div :class="$style.author" class="roboto">
              By {{ article.user.username }}
            </div>
          </div>
          <div :class="$style['article-img']">
            <img :src="imgSrc(article)" alt="" />
          </div>
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
    authenticated() {
      return this.$store.state.username.length > 0;
    },
  },
  methods: {
    loadMore() {
      this.max_items += 10;
    },
    edit() {
      this.$router.push("/article-editor");
    },
    getText(html) {
      html = html.replace(/<style([\s\S]*?)<\/style>/gi, "");
      html = html.replace(/<script([\s\S]*?)<\/script>/gi, "");
      html = html.replace(/<\/div>/gi, "\n");
      html = html.replace(/<\/li>/gi, "\n");
      html = html.replace(/<li>/gi, "  *  ");
      html = html.replace(/<\/ul>/gi, "\n");
      html = html.replace(/<\/p>/gi, "\n");
      html = html.replace(/<br\s*[/]?>/gi, "\n");
      html = html.replace(/<[^>]+>/gi, "");
      return html;
    },
    redirectItem(item) {
      this.$store.commit("changeItemId", item.id);
      this.$router.push({ name: "article", query: { id: item.id } });
    },
    imgSrc(article) {
      return `https://source.unsplash.com/user/didiofederico_photographer/250x250?sig=${article.id}`;
    },
  },
  beforeCreate() {
    this.$store.dispatch("getAllArticles", 0);
  },
  beforeMount() {
    document.title = "📮 Articles";
  },
  beforeDestroy() {
    this.$store.commit("clearAllArticles");
  },
};
</script>

<style module>
.articles-section {
  max-width: 800px;
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
  width: 100%;
}

.article-img img {
  height: 100%;
  width: 250px;
  object-fit: cover;
  margin-left: 10px;
}

.article-img img:empty {
  background-image: linear-gradient(#eee 8%, #dadada 18%, #eee 33%);
  animation: skeletonLoading 1.2s linear infinite;
  animation-fill-mode: backwards;
  animation-delay: 0.2s;
  background-size: 200% 200%;
}

@keyframes skeletonLoading {
  0% {
    background-position: 50% 0%;
  }

  100% {
    background-position: 0% -200%;
  }
}

.article .info h2 {
  margin-bottom: 0;
}

.article:hover .info h2 {
  text-decoration: underline;
}

.article .pre-content {
  font-weight: 200;
  font-style: italic;
  font-size: 18px;
}

.article .author {
  color: #777;
  text-align: left;
  font-style: italic;
}

.heading {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.edit-btn {
  color: #888;
  cursor: pointer;
}

.edit-btn span {
  font-style: italic;
}

.edit-btn:hover span {
  text-decoration: underline;
}

@media only screen and (max-width: 500px) {
  .articles-section h1.head {
    font-size: 22px;
  }

  .edit-btn span {
    font-size: 14px;
  }

  .info h2 {
    font-size: 20px;
  }

  .article {
    height: auto;
  }

  .article h2 {
    margin: 0;
  }

  .article .pre-content {
    font-size: 16px;
  }

  .article .author {
    font-size: 14px;
  }

  .article-img img {
    width: 150px;
    height: 150px;
  }
}
</style>