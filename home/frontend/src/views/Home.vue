<template>
  <div>
    <Header />
    <HeroSection />
    <RecentSearchesSection />
    <FeaturedDestinationSection />
    <FeaturedBlogsSection />
    <FeaturedAttractionsSection />
    <FeaturedHotelSection />
    <FeaturedRestaurantSection />
  </div>
</template>

<script>
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import RecentSearchesSection from "../components/RecentSearchesSection";
import FeaturedBlogsSection from "../components/FeaturedBlogsSection";
import FeaturedAttractionsSection from '../components/FeaturedAttractionsSection.vue';
import FeaturedDestinationSection from '../components/FeaturedDestinationSection.vue';
import FeaturedHotelSection from '../components/FeaturedHotelSection.vue';
import FeaturedRestaurantSection from '../components/FeaturedRestaurantSection.vue';

export default {
  name: 'Home',
  components: {
    RecentSearchesSection,
    Header,
    HeroSection,
    FeaturedAttractionsSection,
    FeaturedBlogsSection,
    FeaturedDestinationSection,
    FeaturedHotelSection,
    FeaturedRestaurantSection,
  },
  mounted() {
    this.$store.
    FeaturedAttractionsSectioncommit('changePath', '/');
  },
  beforeDestroy() {
    this.$store.commit('clearAllAttractions');
  }
}
</script>