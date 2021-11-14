<template>
  <div>
    <div :class="$style['meta']">
      <h4>{{ username }}</h4>
      <stars :starCount="point" />
    </div>
    <div :class="$style.text">{{ text }}</div>
  </div>
</template>
<script>
import Stars from "./Stars.vue";
export default {
  components: { Stars },
  name: "ReviewItem",
  props: ["text", "username", "point"],
};
</script>
<style module>
.meta {
  display: flex;
  align-items: center;
  margin: 20px 0 5px 0;
}

.meta h4 {
  margin: 0;
}
</style>