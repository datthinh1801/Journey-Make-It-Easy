<template>
  <div class="col-container">
    <img alt="blog-img" src="placeholder_img.png">
    <HeartButton class="heart-btn"/>
    <div>
      <div class="roboto">Author</div>
      <div class="roboto">Why Fall is the Perfect Time to visit Our National Parks</div>
    </div>
  </div>
</template>

<script>
import HeartButton from "./HeartButton";

export default {
  name: 'FeaturedBlog',
  components: {
    HeartButton,
  }
}
</script>

<style scoped>
@import "../styles/global.css";

img {
  max-width: 320px;
  max-height: 190px;
  width: 320px;
  height: 190px;
}

.col-container {
  background-color: white;
  height: 292px;
  width: 320px;
  max-height: 292px;
  max-width: 320px;
  position: relative;
}

div.col-container div:not(.roboto) {
  display: flex;
  flex-direction: column;
  text-align: center;
}

div.roboto:first-child {
  font-size: 18px;
  font-weight: 500;
  margin: 10px 0;
}
</style>