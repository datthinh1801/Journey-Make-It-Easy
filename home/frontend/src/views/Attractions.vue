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
  beforeDestroy() {
    this.$store.commit("clearAllAttractions");
  },
};
</script>

<style module>
</style>