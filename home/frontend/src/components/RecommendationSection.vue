<template>
  <div class="width-control" :class="$style['width-control']">
    <h2>Recommendations</h2>
    <div v-for="(item, i) in recommendationDetails" :key="i">
      <RecommendationGroup
        :description="item.description"
        :title="item.title"
      />
    </div>
  </div>
</template>

<script>
import RecommendationGroup from "./RecommendationGroup";

export default {
  name: "RecommendationSection",
  components: { RecommendationGroup },
  data() {
    return {
      recommendationDetails: [
        {
          title: "Do",
          description:
            "Places to see, ways to wander, and signature experiences.",
        },
        {
          title: "Stay",
          description:
            "A mix of the charming, modern, and comfortable accommodations.",
        },
        {
          title: "Eat",
          description: "Must-try spots to dine, drink, and feast.",
        },
      ],
    };
  },
  computed: {},
};
</script>

<style module>
.width-control {
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (max-width: 500px) {
  .width-control h2 {
    font-size: 20px;
    margin: 10px 0;
  }
}
</style>