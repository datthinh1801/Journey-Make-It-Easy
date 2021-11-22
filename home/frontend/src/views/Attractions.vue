<template>
  <div>
    <HeaderAndNav />
    <TopAttractionsSection />
  </div>
</template>

<script>
import TopAttractionsSection from "../components/TopAttractionsSection";
import HeaderAndNav from "../components/HeaderAndNav";

export default {
  name: "Attractions",
  components: { HeaderAndNav, TopAttractionsSection },
  data() {
    return {};
  },
  beforeCreate() {
    const params = new URLSearchParams(window.location.search);
    if (this.$store.state.city_id !== "") {
      this.$store.dispatch("getAttraction", this.$store.state.city_id);
    } else if (params.has("cityid")) {
      this.$store.dispatch("getCityById", params.get("cityid"));
      this.$store.dispatch("getAttraction", params.get("cityid"));
    } else {
      this.$router.push("/");
    }
  },
  beforeMount() {
    let city = this.$store.state.city_name;
    document.title = "🏖 Top Attractions in " + city;
  },
  beforeDestroy() {
    this.$store.commit("clearAllAttractions");
  },
};
</script>

<style module>
</style>