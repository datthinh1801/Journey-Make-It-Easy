<template>
  <div v-if="!isFetching">
    <div>
      <Header />
      <div :class="[$style.title, 'roboto', 'row-container', 'width-control']">
        <span>Explore</span><span>{{ place }}</span>
      </div>
      <NavBar />
    </div>
    <div :class="[$style.imageSection, 'width-control']">
      <image-slider />
    </div>
    <div :class="[$style['info'], 'width-control']">
      <h2>Info</h2>
      <p>
        {{ itemDetail.info }}
      </p>
    </div>
    <div
      :class="['row-container', 'col-container', $style.recommendationSection]"
    >
      <RecommendationSection />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import RecommendationSection from "../components/RecommendationSection";
import ImageSlider from "../components/ImageSlider";

export default {
  name: "Explore",
  components: {
    RecommendationSection,
    NavBar,
    Header,
    ImageSlider,
  },
  data() {
    return {};
  },
  computed: {
    place() {
      return this.$store.state.city_name;
    },
    itemDetail() {
      return this.$store.state.item;
    },
    isFetching() {
      return !this.$store.state.item["id"];
    },
  },
  beforeCreate() {
    const params = new URLSearchParams(window.location.search);
    if (this.$store.state.city_id !== "") {
      this.$store.dispatch("getCityDetail", this.$store.state.city_id);
      document.title = "🇻🇳 " + this.$store.state.city_name;
    } else if (params.get("cityid")) {
      this.$store.dispatch("getCityById", params.get("cityid")).then(() => {
        document.title = "🇻🇳 " + this.place;
      });
      this.$store.dispatch("getCityDetail", params.get("cityid"));
    } else {
      this.$router.push("/");
    }
  },
  beforeDestroy() {
    this.$store.commit("clearAllAttractions");
    this.$store.commit("clearAllHotels");
    this.$store.commit("clearAllRestaurants");
  },
};
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
  color: #2e86c1;
  margin-right: 10px;
}

.imageSection {
  margin-top: 40px;
}

.info p {
  text-align: justify;
  text-indent: 40px;
}

@media only screen and (max-width: 500px) {
  .info p {
    text-indent: 30px;
    font-size: 15px;
    padding-right: 10px;
  }

  .title {
    margin-top: 70px;
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: bold;
    justify-content: left;
  }

  .imageSection {
    margin-top: 20px;
  }

  .info h2 {
    font-size: 20px;
  }
}
</style>