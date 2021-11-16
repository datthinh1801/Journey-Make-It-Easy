<template>
  <div class="row-container width-control" :class="$style['row-container']">
    <img :id="$style['hero-img']" alt="hero-img" src="images/Hero_image.png">
    <img :id="$style['hero-text']" alt="hero-text" src="images/Hero_text.png">
    <SearchBox :id="$style['search-box']"/>
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

<style module>
.row-container {
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
  top: 410px;
  left: 30%;
}
</style>