<template>
  <div>
    <Header/>
    <HeroSection/>
    <RecentSearchesSection/>
    <FeaturedDestinationsSection/>
  </div>
</template>

<script>
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import RecentSearchesSection from './components/RecentSearchesSection'
import FeaturedDestinationsSection from "./components/FeaturedDestinationsSection";

export default {
  name: 'App',
  components: {
    Header,
    HeroSection,
    RecentSearchesSection,
    FeaturedDestinationsSection
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
</style>
