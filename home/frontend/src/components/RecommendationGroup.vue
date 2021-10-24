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

      <VerticalItem v-for="(item, i) in items" v-bind:key="item.name + i"
                    :class="$style.recommendedItem"
                    :imgSrc="item.images[0]"
                    :itemName="item.name + i"
                    :imgWidth="imgWidth"
                    :imgHeight="imgHeight"/>

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

export default {
  name: 'RecommendationGroup',
  components: {VerticalItem,},
  props: ['title', 'description'],
  data() {
    return {
      currentItem: 0,
      itemToShow: 3,
    }
  },
  computed: {
    items() {
      let itemArr = [];
      if (this.title === 'Do') {
        itemArr = this.$store.state.attractionArr;
      } else if (this.title === 'Stay') {
        itemArr = this.$store.state.hotelArr;
      } else {
        itemArr = this.$store.state.restaurantArr;
      }
      return itemArr.slice(this.currentItem, this.currentItem + this.itemToShow);
    },
    showPrev() {
      return this.currentItem > 0;
    },
    showNext() {
      // TODO: Define the maximum number of items to show
      return true;
    },
    imgWidth() {
      return '230px';
    },
    imgHeight() {
      return '230px';
    }
  },
  methods: {
    async getAttraction() {
      await this.$store.dispatch('getAttraction');
    },
    getRestaurant() {
      this.$store.dispatch('getRestaurant');
    },
    getHotel() {
      this.$store.dispatch('getHotel');
    },
    async getItem() {
      if (this.title === 'Do') {
        await this.getAttraction();
      } else if (this.title === 'Eat') {
        this.getRestaurant();
      } else {
        this.getHotel();
      }
    },
    moveLeft() {
      this.currentItem = Math.max(this.currentItem - 1, 0);
    },
    async moveRight() {
      await this.getItem();
      ++this.currentItem;
    }
  },
  mounted() {
    for (let i = 0; i < this.itemToShow; ++i) {
      this.getItem();
    }
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
  grid-template-rows: 1fr;
  overflow: hidden;
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