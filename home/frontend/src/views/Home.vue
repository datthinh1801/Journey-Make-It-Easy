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
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import RecentSearchesSection from "../components/RecentSearchesSection";
import FeaturedDestinationsSection from "../components/FeaturedDestinationsSection";
import FeaturedBlogsSection from "../components/FeaturedBlogsSection";

export default {
  name: 'Home',
  components: {
    RecentSearchesSection,
    Header,
    HeroSection,
    FeaturedDestinationsSection,
    FeaturedBlogsSection
  },
  mounted() {
    this.$store.commit('changePath', '/');
  },
  beforeDestroy() {
    this.$store.commit('clearAllAttractions');
  }
}
</script>