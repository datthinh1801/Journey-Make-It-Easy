<template>
  <div>
    <div>
      <Header/>
      <div :class="[$style.title, 'roboto', 'row-container','width-control']">
        <span>Explore</span><span>{{ place }}</span>
      </div>
      <NavBar/>
    </div>
    <div :class="[$style.imageSection, 'width-control']">
      <image-slider />
      {{images}}
    </div>
    <div :class="['row-container', 'col-container', $style.recommendationSection]">
      <RecommendationSection/>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import RecommendationSection from "../components/RecommendationSection";
import ImageSlider from "../components/ImageSlider";

export default {
  name: 'Explore',
  components: {
    RecommendationSection,
    NavBar,
    Header,
    ImageSlider
  },
  data() {
    return {}
  },
  computed: {
    place() {
      return this.$store.state.city;
    },
    itemDetail() {
      return this.$store.state.item;
    },
  },
  beforeMount() {
    this.$store.dispatch('getCityDetail', this.$store.state.city);
  },
  mounted() {
    this.$store.commit('changePath', '/explore');
  },
  beforeDestroy() {
    this.$store.commit('clearAllAttractions');
    this.$store.commit('clearAllHotels');
    this.$store.commit('clearAllRestaurants');
  }
}
</script>

<style module>
.title {
  margin-top: 70px;
  margin-bottom: 10px;
  font-size: 44px;
  font-weight: bold;
  justify-content: left;
}

.title span:first-child {
  color: #2E86C1;
  margin-right: 10px;
}

.imageSection {
  margin-top: 40px;
}
</style>