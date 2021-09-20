<template>
  <div class="container">
    <img id="hero-img" alt="hero-img" src="Hero_image.png">
    <img id="hero-text" alt="hero-text" src="Hero_text.png">
    <div id="search-box">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style scoped>
.container {
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
}

#hero-img {
  width: 800px;
}

#hero-text {
  position: absolute;
  top: 180px;
  right: 160px;
  width: 300px;
}
</style>