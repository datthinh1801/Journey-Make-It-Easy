<template>
  <div :class="$style['grid-container']">
    <button :class="$style.leftButton" @click="moveLeft" v-show="showPrev">
      <font-awesome-icon icon="chevron-left" />
    </button>
    <VerticalItem v-for="item in items" :key="item.id" :img-src="item.images[0].link" :img-width="imgWidth"
      :img-height="imgHeight" :class="$style['v-item']" @click="redirectToItem()">
      <div :class="$style['item-detail-container']">
        <h4>{{ item.name }}</h4>
        <rating-section :ratingCount="item.numberVoting" :starCount="item.ratingScore" />
      </div>
    </VerticalItem>
    <button :class="$style.rightButton" @click="moveRight()" v-show="showNext">
      <font-awesome-icon icon="chevron-right" />
    </button>
  </div>
</template>

<script>
import RatingSection from './RatingSection.vue';
import VerticalItem from "./VerticalItem";

export default {
  name: 'FeaturedDestinations',
  components: {
    VerticalItem, RatingSection,
  },
  data() {
    return {
      this_item: 0,
      last_item: 9,
      showed_items: 4,
    }
  },
  computed: {
    items() {
      return this.$store.state.attractionArr.slice(this.this_item, this.this_item + this.showed_items);
    },
    imgWidth() {
      return '100%';
    },
    imgHeight() {
      return '200px';
    },
    showPrev() {
      return this.this_item > 0;
    },
    showNext() {
      // TODO: Define the maximum number of items to show
      return true;
    }
  },
  methods: {
    moveLeft() {
      this.this_item = Math.max(this.this_item - 1, 0);
    },
    moveRight() {
      ++this.this_item;
    },
    redirectToItem() {
      console.log('ok');
    }
  },
  beforeMount() {
    this.$store.dispatch('getAllAttractions');
  }
}
</script>

<style module>
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  position: relative;
}

.v-item:hover .item-detail-container h4{
  text-decoration: underline;
}

.item-detail-container {
  height: 40px;
}

.item-detail-container h4 {
  margin: 0;
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
}
</style>