<template>
  <div class="container">
    <img id="hero-img" alt="hero-img" src="Hero_image.png">
    <img id="hero-text" alt="hero-text" src="Hero_text.png">
    <SearchBox id="search-box"/>
  </div>
</template>

<script>
import SearchBox from './Searchbox';

export default {
  name: 'Hero',
  components: {
    SearchBox
  }
}
</script>

<style scoped>
@import '../styles/global.css';

.container {
  margin-top: 60px;
  position: relative;
}

#hero-img {
  width: 80%;
  margin: auto;
}

#hero-text {
  position: absolute;
  width: 300px;
  height: auto;
  right: 50px;
  top: 100px;
}

#search-box {
  position: absolute;
  bottom: 0;
  left: 30%;
}
</style>