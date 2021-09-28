<template>
  <div>
    <div>
      <Header/>
      <div :class="[$style.title, 'roboto', 'row-container']">
        <span>Explore</span><span>{{ place }}</span>
      </div>
      <NavBar/>
    </div>
    <div :id="$style.imageSection">
      <ImagesSection/>
    </div>
    <div :id="$style.recommendationSection" :class="['row-container', 'col-container']">
      <RecommendationSection/>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ImagesSection from "../components/ImagesSection";
import RecommendationSection from "../components/RecommendationSection";

export default {
  name: 'Explore',
  components: {RecommendationSection, ImagesSection, NavBar, Header},
  data() {
    return {
      place: 'Da Lat'
    }
  }
}
</script>

<style module>
@import "../styles/global.css";

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

#imageSection {
  margin-top: 40px;
}

#recommendationSection {
}
</style>