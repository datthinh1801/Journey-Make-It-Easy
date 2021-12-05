<template>
  <div class="width-control">
    <p class="roboto title">Must-try Eateries</p>
    <div :class="$style['item-list-container']">
      <vertical-item
        v-for="item in items"
        :key="item.id"
        :imgSrc="item.images[0].link"
        :imgWidth="imgWidth"
        :imgHeight="imgHeight"
        @click.native="redirectToItem(item)"
        :class="$style['v-item']"
      >
        <div :class="$style['v-item-detail']">
          <h4>{{ item.name }}</h4>
          <rating-section
            :ratingCount="item.numberVoting"
            :starCount="item.ratingScore"
          />
        </div>
      </vertical-item>
      <button :class="$style.leftButton" @click="moveLeft" v-show="showPrev">
        <font-awesome-icon icon="chevron-left" />
      </button>
      <button
        :class="$style.rightButton"
        @click="moveRight()"
        v-show="showNext"
      >
        <font-awesome-icon icon="chevron-right" />
      </button>
    </div>
  </div>
</template>

<script>
import RatingSection from "./RatingSection.vue";
import VerticalItem from "./VerticalItem.vue";
export default {
  name: "FeaturedRestaurantSection",
  components: {
    VerticalItem,
    RatingSection,
  },
  data() {
    return {
      this_item: 0,
      showed_items: 4,
      imgWidth: "235px",
      imgHeight: "200px",
    };
  },
  created() {
    window.addEventListener("resize", this.resize_img_mobile);
    this.resize_img_mobile();
  },
  computed: {
    items() {
      return this.$store.state.restaurantArr.slice(
        this.this_item,
        this.this_item + this.showed_items
      );
    },
    showPrev() {
      return this.this_item > 0;
    },
    showNext() {
      return (
        this.$store.state.restaurantArr.length >
        this.this_item + this.showed_items
      );
    },
    // imgWidth() {
    //   return "235px";
    // },
    // imgHeight() {
    //   return "200px";
    // },
  },
  methods: {
    moveLeft() {
      this.this_item = Math.max(this.this_item - 1, 0);
    },
    moveRight() {
      ++this.this_item;
    },
    redirectToItem(item) {
      this.$store.commit("changeItemId", item.id);
      this.$router.push({ name: "restaurant", query: { id: item.id } });
    },
    resize_img_mobile() {
      if (screen.width > 800) {
        this.imgWidth = "235px";
        this.imgHeight = "200px";
        this.showed_items = 4;
      } else {
        this.imgWidth = "170px";
        this.imgHeight = "185px";
        this.showed_items = 3;
      }
    },
  },
  beforeMount() {
    this.$store.dispatch("getAllRestaurants", 10);
  },
};
</script>

<style module>
.item-list-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  width: 100%;
  position: relative;
}

.item-list-container h4 {
  margin: 0;
}

.v-item:hover .v-item-detail h4 {
  text-decoration: underline;
}

.v-item-detail {
  height: 70px;
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
  z-index: 0;
  cursor: pointer;
}

.leftButton {
  padding-right: 6px;
  left: -15px;
}

.rightButton {
  padding-left: 6px;
  right: -15px;
}

.leftButton:hover,
.rightButton:hover {
  background-color: black;
  color: white;
  border-color: black;
}

@media only screen and (max-width: 500px) {
  .v-item-detail {
    height: 70px;
    font-size: 12px;
  }
  .item-list-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    width: 100%;
    position: relative;
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
    top: 33%;

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
    right: -20px;
  }
}
</style>