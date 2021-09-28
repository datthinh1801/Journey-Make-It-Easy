<template>
  <div>
    <h2>Recommendations</h2>
    <div v-for="(item, i) in recommendationDetails" :key="i">
      <RecommendationGroup :title="item.title" :description="item.description"/>
    </div>
  </div>
</template>

<script>
import RecommendationGroup from "./RecommendationGroup";

export default {
  name: 'RecommendationSection',
  components: {RecommendationGroup},
  data() {
    return {
      recommendationDetails: [
        {
          title: 'Do',
          description: 'Places to see, ways to wander, and signature experiences.'
        },
        {
          title: 'Stay',
          description: 'A mix of the charming, modern, and comfortable accommodations.'
        },
        {
          title: 'Eat',
          description: 'Must-try spots to dine, drink, and feast.'
        }
      ]
    }
  }
}
</script>

<style>

</style>