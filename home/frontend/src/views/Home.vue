<template>
  <div>
    <Header/>
    <HeroSection/>
    <FeaturedDestinationsSection/>
    <FeaturedBlogsSection/>
  </div>
</template>

<script>
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturedDestinationsSection from "../components/FeaturedDestinationsSection";
import FeaturedBlogsSection from "../components/FeaturedBlogsSection";

export default {
  name: 'Home',
  components: {
    Header,
    HeroSection,
    FeaturedDestinationsSection,
    FeaturedBlogsSection
  }
}
</script>
