<template>
  <div>
    <Header/>
    <HeroSection/>
  </div>
</template>

<script>
import Header from './components/Header'
import HeroSection from './components/HeroSection'

export default {
  name: 'App',
  components: {
    Header,
    HeroSection
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
</style>
