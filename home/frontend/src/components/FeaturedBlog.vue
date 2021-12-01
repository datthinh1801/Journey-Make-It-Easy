<template>
  <div class="col-container" :class="$style['col-container']">
    <div :class="$style.image">
      <img alt="" :src="imgSrc" :class="$style.image" />
    </div>
    <div :class="$style['article-info']">
      <div class="roboto" :class="$style.author">{{ author }}</div>
      <div class="roboto" :class="$style.title">{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturedBlog",
  components: {},
  props: ["author", "title", "imgSrc"],
};
</script>

<style module>
.image {
  width: 100%;
  height: 190px;
}

.image img:empty {
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

.col-container {
  background-color: white;
  height: 292px;
  /* width: 320px; */
  width: 30%;
  position: relative;
  cursor: pointer;
  transition: 0.2s;
}

div.roboto:first-child {
  font-size: 18px;
  font-weight: 500;
  margin: 10px 0;
}

.article-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  text-align: center;
}

.col-container:hover .title {
  text-decoration: underline;
}

.col-container:hover .image {
  opacity: 0.95;
}

.author {
  font-weight: 300;
  font-size: 16px;
  font-style: italic;
}

.title {
  font-weight: 500;
  font-size: 18px;
}

@media only screen and (max-width: 500px) {
  .col-container {
    width: 90%;
    height: 200px;
    margin: auto auto 30px auto;
    background-color: transparent;
  }

  .col-container:last-child {
    margin-bottom: 0;
  }

  .image {
    height: 100%;
  }

  .article-info {
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgb(87, 87, 87)
    );
    position: absolute;
    top: 110px;
    height: 90px;
    color: white;
  }

  .title {
    font-size: 16px;
  }

  .author {
    font-size: 14px;
  }
}
</style>