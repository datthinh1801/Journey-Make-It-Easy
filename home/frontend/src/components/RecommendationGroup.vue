<template>
  <div :class="$style.gridContainer">
    <div :class="$style.info">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>

    <div :class="$style.itemContainer">
      <VerticalItem
        v-for="item in items"
        :key="item.id"
        :class="$style.recommendedItem"
        :imgSrc="item.images[0].link"
        :imgWidth="imgWidth"
        :imgHeight="imgHeight"
        @click.native="redirectItem(item)"
      >
        <div :class="$style['item-detail']">
          <h4>{{ item.name }}</h4>
          <rating-section
            :ratingCount="item.numberVoting"
            :starCount="item.ratingScore"
          />
        </div>
      </VerticalItem>

      <button :class="$style.leftButton" @click="moveLeft" v-show="showPrev">
        <font-awesome-icon icon="chevron-left" />
      </button>
      <button :class="$style.rightButton" @click="moveRight" v-show="showNext">
        <font-awesome-icon icon="chevron-right" />
      </button>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronLeft, faChevronRight);

import VerticalItem from "./VerticalItem";
import RatingSection from "./RatingSection.vue";

export default {
  name: "RecommendationGroup",
  components: { VerticalItem, RatingSection },
  props: ["title", "description"],
  data() {
    return {
      currentItem: 0,
      itemToShow: 3,
    };
  },
  computed: {
    place_id() {
      return this.$store.state.city_id;
    },
    items() {
      let itemArr = [];
      if (this.title === "Do") {
        itemArr = this.$store.state.attractionArr;
      } else if (this.title === "Stay") {
        itemArr = this.$store.state.hotelArr;
      } else {
        itemArr = this.$store.state.restaurantArr;
      }
      return itemArr.slice(
        this.currentItem,
        this.currentItem + this.itemToShow
      );
    },
    showPrev() {
      return this.currentItem > 0;
    },
    showNext() {
      if (this.title === "Do") {
        return (
          this.$store.state.attractionArr.length >
          this.currentItem + this.itemToShow
        );
      } else if (this.title === "Stay") {
        return (
          this.$store.state.hotelArr.length > this.currentItem + this.itemToShow
        );
      } else {
        return (
          this.$store.state.restaurantArr.length >
          this.currentItem + this.itemToShow
        );
      }
    },
    imgWidth() {
      return "230px";
    },
    imgHeight() {
      return "230px";
    },
  },
  methods: {
    getItem() {
      if (this.title === "Do") {
        this.$store.dispatch("getAttraction", this.place_id);
      } else if (this.title === "Eat") {
        this.$store.dispatch("getRestaurant", this.place_id);
      } else {
        this.$store.dispatch("getHotel", this.place_id);
      }
    },
    moveLeft() {
      this.currentItem = Math.max(this.currentItem - 1, 0);
    },
    moveRight() {
      this.getItem();
      ++this.currentItem;
    },
    redirectItem(item) {
      this.$store.commit("changeItemId", item.id);

      if (this.title === "Do") {
        this.$router.push({ name: "attraction", query: { id: item.id } });
      } else if (this.title === "Eat") {
        this.$router.push({ name: "restaurant", query: { id: item.id } });
      } else {
        this.$router.push({ name: "hotel", query: { id: item.id } });
      }
    },
  },
  beforeMount() {
    this.getItem();
  },
};
</script>

<style module>
.gridContainer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 320px;
}

.recommendedItem {
  cursor: pointer;
  max-width: 95%;
  max-height: 95%;
  margin-bottom: 30px;
}

.recommendedItem .item-detail h4 {
  margin: 0;
}

.recommendedItem:hover .item-detail h4 {
  text-decoration: underline;
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
  border-color: black;
}

.rightButton {
  right: 0;
}

@media only screen and (max-width: 500px) {
  .info h3 {
    font-size: 18px;
    margin: 10px 0 5px 0;
  }

  .info p {
    font-size: 15px;
  }
  .gridContainer {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 200px;
  }

  .itemContainer {
    position: relative;
    grid-column: unset;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    overflow: hidden;
    top: 10px;
    padding: 0;
  }
  .leftButton,
  .rightButton {
    background-color: white;
    color: black;

    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    height: 25px;
    width: 25px;
    top: 50px;

    border-radius: 100%;
    border: 2px solid black;

    font-size: 18px;
    transition: 0.2s;
    z-index: 0;
    cursor: pointer;
  }
  .leftButton {
    padding-right: 6px;
    left: 0px;
  }

  .rightButton {
    padding-left: 6px;
    right: -10px;
  }
  .recommendedItem .item-detail {
    margin: 0;
    font-size: 12px;
  }
}
</style>