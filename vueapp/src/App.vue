<template>
  <div>
    <Header/>
    <HeroSection/>
    <RecentSearchesSection/>
    <FeaturedDestinationsSection/>
    <FeaturedBlogsSection/>
  </div>
</template>

<script>
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import RecentSearchesSection from './components/RecentSearchesSection'
import FeaturedDestinationsSection from "./components/FeaturedDestinationsSection";
import FeaturedBlogsSection from "./components/FeaturedBlogsSection";

export default {
  name: 'App',
  components: {
    Header,
    HeroSection,
    RecentSearchesSection,
    FeaturedDestinationsSection,
    FeaturedBlogsSection,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
</style>
