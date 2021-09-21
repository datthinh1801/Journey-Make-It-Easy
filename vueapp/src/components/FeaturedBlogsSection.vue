<template>
  <div :class="$style.container">
    <FeaturedBlogs/>
  </div>
</template>

<script>
import FeaturedBlogs from "./FeaturedBlogs";

export default {
  name: 'FeaturedBlogsSection',
  components: {
    FeaturedBlogs,
  }
}
</script>

<style module>
@import "../styles/global.css";

.container {
  width: 100%;
  background-color: #e3ebff;
  height: 400px;
  position: absolute;
  margin-top: 50px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
}
</style>