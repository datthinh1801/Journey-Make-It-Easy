<template>
  <div :class="$style.gridContainer">
    <div :class="$style.info">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>

    <div :class="$style.itemContainer">
      <button :class="$style.leftButton" @click="moveLeft" v-show="showPrev">
        <font-awesome-icon icon="chevron-left"/>
      </button>

      <VerticalItem v-for="(item, i) in items" :key="i"
                    :class="$style.recommendedItem"
                    :imgSrc="item.images[0]"
                    :itemName="item.name"/>

      <button :class="$style.rightButton" @click="moveRight" v-show="showNext">
        <font-awesome-icon icon="chevron-right"/>
      </button>
    </div>
  </div>
</template>

<script>
import {library} from "@fortawesome/fontawesome-svg-core";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

library.add(faChevronLeft, faChevronRight);

import VerticalItem from "./VerticalItem";

import store from "../store/store";

export default {
  name: 'RecommendationGroup',
  components: {VerticalItem,},
  props: ['title', 'description'],
  data() {
    return {
      currentIndex: 0,
      itemsToShow: 3,
      maxItems: 5,
    }
  },
  computed: {
    items() {
      if (this.title === 'Do') {
        return store.attractions;
      } else if (this.title === 'Eat') {
        return store.restaurants;
      } else {
        return store.hotels;
      }
    },
    showNext() {
      return this.currentIndex + this.itemsToShow !== this.maxItems;
    },
    showPrev() {
      return this.currentIndex !== 0;
    }
  },
  methods: {
    getAttraction(num) {
      for (let i = 0; i < num; ++i) {
        store.getAttraction();
      }
    },
    getRestaurant(num) {
      for (let i = 0; i < num; ++i) {
        store.getRestaurant();
      }
    },
    getHotels(num) {
      for (let i = 0; i < num; ++i) {
        store.getHotels();
      }
    },
    moveLeft() {

    },
    moveRight() {

    }
  },
  mounted() {
    this.getAttraction(3);
    this.getRestaurant(3);
    this.getHotels(3);
  }
}
</script>

<style module>
@import "../styles/global.css";

.gridContainer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
}

.recommendedItem {
  cursor: pointer;
  max-width: 95%;
  max-height: 95%;
}

.itemContainer {
  position: relative;
  grid-column: 2/5;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-left: 20px;
  padding-right: 10px;
}

.leftButton,
.rightButton {
  background-color: white;
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  height: 33px;
  width: 33px;
  top: 33%;

  border-radius: 100%;
  border: 2px solid black;

  font-size: 22px;
  transition: 0.2s;
  z-index: 1;
  cursor: pointer;
}

.leftButton {
  padding-right: 6px;
}

.rightButton {
  padding-left: 6px;
}

.leftButton:hover,
.rightButton:hover {
  background-color: black;
  color: white;
}

.rightButton {
  right: 0;
}

</style>