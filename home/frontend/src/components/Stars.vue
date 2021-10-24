<template>
  <div :class="$style.container">
    <div>
      <font-awesome-icon v-for="i in fullStars" :key="i"
                         :class="$style.star" :icon="'star'"/>
      <font-awesome-icon v-if="lastStar"
                         :class="$style.star" :icon="'star-half'"/>
      <font-awesome-icon v-for="j in hiddenStars" :key="j"
                         :class="[$style.star, $style['hidden-star']]"
                         :icon="'star'"/>
    </div>
    <div>
      {{ printedStarCount }}
    </div>
  </div>
</template>

<script>
import {library} from "@fortawesome/fontawesome-svg-core";
import {faStar, faStarHalf} from "@fortawesome/free-solid-svg-icons";

library.add(faStar);
library.add(faStarHalf);

export default {
  name: 'Stars',
  props: ['starCount'],
  computed: {
    lastStar() {
      return Math.round(this.starCount % 1);
    },
    fullStars() {
      return Math.floor(this.starCount);
    },
    printedStarCount() {
      return String(this.starCount).padEnd(3, '.0');
    },
    hiddenStars() {
      return Math.round(5 - Math.round(this.starCount));
    }
  }
}
</script>

<style module>
.container {
  display: flex;
  justify-content: flex-start;
}

.container div {
  margin: 0 3px;
}

.container div:first-child {
  margin-left: 0;
}

.star {
  color: #F9C100;
}

.hidden-star {
  color: transparent;
}
</style>