<template>
  <div :class="$style.container">
    <font-awesome-icon :class="$style.star" :icon="'star'"/>
    <font-awesome-icon :class="$style.star" :icon="'star'"/>
    <font-awesome-icon :class="$style.star" :icon="'star'"/>
    <font-awesome-icon :class="$style.star" :icon="'star'"/>
    <font-awesome-icon :class="$style.star" :icon="'star-half'"/>
  </div>
</template>

<script>
import {library} from "@fortawesome/fontawesome-svg-core";
import {faStar, faStarHalf} from "@fortawesome/free-solid-svg-icons";

library.add(faStar);
library.add(faStarHalf);

export default {
  name: 'Stars',
}
</script>

<style module>
.container {
  display: flex;
  flex-direction: row;
}

.star {
  color: #F9C100;
}
</style>