<template>
  <div>
    <HeroSection/>
    <FeaturedDestinationsSection/>
    <FeaturedBlogsSection/>
  </div>
</template>

<script>
import HeroSection from "../components/HeroSection";
import FeaturedDestinationsSection from "../components/FeaturedDestinationsSection";
import FeaturedBlogsSection from "../components/FeaturedBlogsSection";

export default {
  name: 'Home',
  components: {
    HeroSection,
    FeaturedDestinationsSection,
    FeaturedBlogsSection
  }
}
</script>
