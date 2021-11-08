<template>
  <div :class="$style['recent-search-item']">
    <font-awesome-icon :icon="['fas','map-marker-alt']" :class="$style['map-marker-icon']"/>
    <div :class="$style['recent-search-text']">
      <strong>Da Lat</strong>
      <p>Lam Dong Province</p>
    </div>
  </div>
</template>

<script>
import {library} from "@fortawesome/fontawesome-svg-core";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

library.add(faMapMarkerAlt);

export default {
  name: 'RecentSearch',
}
</script>

<style module>
.map-marker-icon {
  font-size: 22px;
}

.recent-search-item {
  background-color: white;
  color: black;
  width: 180px;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 10px;
  border: 2px solid #aaaaaa;
  border-radius: 14px;
  cursor: pointer;
  transition: 0.3s;
}

.recent-search-item:hover {
  background-color: black;
  color: white;
}

.recent-search-text {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  margin-left: 10px;
  font-family: 'Roboto', sans-serif;
}

.recent-search-text strong {
  font-size: 18px;
  font-weight: bold;
}

.recent-search-text p {
  margin: 0;
  font-size: 16px;
  font-weight: 300;
}
</style>