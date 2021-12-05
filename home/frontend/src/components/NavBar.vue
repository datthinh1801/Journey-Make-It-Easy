<template>
  <nav class="row-container width-control">
    <button :class="$style.navButton" @click="moveLeft" v-if="showButton">
      <font-awesome-icon icon="chevron-left" />
    </button>

    <router-link
      :class="[$style.navItem, 'roboto']"
      :to="'/explore?cityid=' + cityid"
      v-show="showExplore"
    >
      Explore
      <font-awesome-icon icon="globe-asia" />
    </router-link>
    <router-link
      :class="[$style.navItem, 'roboto']"
      :to="'/attractions?cityid=' + cityid"
      v-show="showAttractions"
    >
      Attractions
      <font-awesome-icon icon="umbrella-beach" />
    </router-link>
    <router-link
      :class="[$style.navItem, 'roboto']"
      :to="'/restaurants?cityid=' + cityid"
      v-show="showRestaurants"
    >
      Restaurants
      <font-awesome-icon icon="utensils" />
    </router-link>
    <router-link
      :class="[$style.navItem, 'roboto']"
      :to="'/hotels?cityid=' + cityid"
      v-show="showHotels"
    >
      Hotels
      <font-awesome-icon icon="hotel" />
    </router-link>
    <router-link
      :class="[$style.navItem, 'roboto']"
      to="/articles"
      v-show="showArticles"
    >
      Articles
      <font-awesome-icon icon="pencil-alt" />
    </router-link>
    <button :class="$style.navButton" @click="moveRight" v-if="showButton">
      <font-awesome-icon icon="chevron-right" />
    </button>
  </nav>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGlobeAsia,
  faUtensils,
  faHotel,
  faUmbrellaBeach,
  faPencilAlt,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faGlobeAsia,
  faUtensils,
  faHotel,
  faUmbrellaBeach,
  faPencilAlt,
  faChevronLeft,
  faChevronRight
);
export default {
  name: "NavBar",
  components: {},
  data() {
    return {
      showExplore: true,
      showAttractions: true,
      showRestaurants: true,
      showHotels: true,
      showArticles: true,
      currentNavIndex: 0,
      showButton: false,
      navNames: ["explore", "attractions", "restaurants", "hotels", "articles"],
    };
  },
  computed: {
    cityid() {
      return this.$store.state.city_id;
    },
    showPrev() {
      return this.currentNavIndex > 0;
    },
    showNext() {
      return this.currentNavIndex < 5;
    },
  },
  methods: {
    setNavItem(name) {
      if (name === "explore") {
        this.showExplore = true;
        this.showRestaurants = false;
        this.showAttractions = false;
        this.showHotels = false;
        this.showArticles = false;
        this.currentNavIndex = 0;
      } else if (name === "attractions") {
        this.showExplore = false;
        this.showRestaurants = false;
        this.showAttractions = true;
        this.showHotels = false;
        this.showArticles = false;
        this.currentNavIndex = 1;
      } else if (name === "restaurants") {
        this.showExplore = false;
        this.showRestaurants = true;
        this.showAttractions = false;
        this.showHotels = false;
        this.showArticles = false;
        this.currentNavIndex = 2;
      } else if (name === "hotels") {
        this.showExplore = false;
        this.showRestaurants = false;
        this.showAttractions = false;
        this.showHotels = true;
        this.showArticles = false;
        this.currentNavIndex = 3;
      } else if (name === "articles") {
        this.showExplore = false;
        this.showRestaurants = false;
        this.showAttractions = false;
        this.showHotels = false;
        this.showArticles = true;
        this.currentNavIndex = 4;
      } else {
        this.showExplore = true;
        this.showRestaurants = true;
        this.showAttractions = true;
        this.showHotels = true;
        this.showArticles = true;
      }
    },
    relayoutNav() {
      let routerName = this.$router.currentRoute.name;
      if (routerName !== "explore" && routerName.slice(-1) !== "s") {
        routerName += "s";
      }
      if (screen.width < 500) {
        this.setNavItem(routerName);
        this.showButton = true;
      } else {
        this.setNavItem("");
        this.showButton = false;
      }
    },
    moveLeft() {
      this.currentNavIndex = (this.currentNavIndex - 1 + 5) % 5;
      this.setNavItem(this.navNames[this.currentNavIndex]);
    },
    moveRight() {
      this.currentNavIndex = (this.currentNavIndex + 1) % 5;
      this.setNavItem(this.navNames[this.currentNavIndex]);
    },
  },
  mounted() {
    window.addEventListener("resize", this.relayoutNav);
    this.relayoutNav();
  },
};
</script>

<style module>
@import "../styles/global.css";

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

@media only screen and (max-width: 500px) {
  .navItem {
    width: 50%;
    height: 23px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }

  .navItem svg {
    margin-left: 5px;
  }

  .navButton {
    background-color: transparent;
    color: black;
    height: 70px;
    margin: 0;
    border-radius: 0;
  }

  .navButton:hover {
    background-color: transparent;
  }
}
</style>