<template>
  <nav class="row-container width-control">
    <router-link :class="[$style.navItem, 'roboto']" to="/explore">
      Explore
      <font-awesome-icon icon="globe-asia"/>
    </router-link>
    <router-link :class="[$style.navItem, 'roboto']" to="/attractions">
      Attractions
      <font-awesome-icon icon="umbrella-beach"/>
    </router-link>
    <router-link :class="[$style.navItem, 'roboto']" to="/restaurants">
      Restaurants
      <font-awesome-icon icon="utensils"/>
    </router-link>
    <router-link :class="[$style.navItem, 'roboto']" to="/hotels">
      Hotels
      <font-awesome-icon icon="hotel"/>
    </router-link>
    <router-link :class="[$style.navItem, 'roboto']" to="/articles">
      Articles
      <font-awesome-icon icon="pencil-alt"/>
    </router-link>
  </nav>
</template>

<script>
import {library} from "@fortawesome/fontawesome-svg-core";
import {faGlobeAsia} from "@fortawesome/free-solid-svg-icons";
import {faUtensils} from "@fortawesome/free-solid-svg-icons";
import {faHotel} from "@fortawesome/free-solid-svg-icons";
import {faUmbrellaBeach} from "@fortawesome/free-solid-svg-icons";
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons";

library.add(faGlobeAsia, faUtensils, faHotel, faUmbrellaBeach, faPencilAlt);
export default {
  name: 'NavBar',
  components: {}
}
</script>

<style module>
@import '../styles/global.css';

.navItem {
  background-color: white;
  color: black;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;

  width: 160px;
  height: 50px;

  border: 2px solid #000;
  border-radius: 14px;
  padding: 10px;
  transition: 0.3s;
}

.navItem:hover {
  background-color: black;
  color: white;
}
</style>