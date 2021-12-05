<template>
  <div>
    <h1 :class="$style.header">
      Top Attractions in <span :class="$style.place">{{ place }}</span>
    </h1>
    <div :class="$style['content-container']" class="width-control">
      <VerticalItem
        v-for="item in items"
        :key="item.id"
        :class="$style['grid-item']"
        :imgSrc="item.images[0].link"
        :itemName="item.name"
        :img-width="imgWidth"
        :img-height="imgHeight"
        @click.native="redirectToAttraction(item)"
      >
        <div :class="$style['item-description']">
          <h3 :class="$style.title">{{ item.name }}</h3>
          <RatingSection :star-count="item.ratingScore" />
        </div>
      </VerticalItem>
    </div>
    <LoadMoreButton @loadMore="loadMore" v-if="endOfArray" />
  </div>
</template>

<script>
import VerticalItem from "./VerticalItem";
import LoadMoreButton from "./LoadMoreButton";
import RatingSection from "./RatingSection";

export default {
  name: "TopAttractionsSection",
  components: { RatingSection, LoadMoreButton, VerticalItem },
  data() {
    return {
      item_n: 9,
    };
  },
  computed: {
    endOfArray() {
      return this.item_n < this.$store.state.attractionArr.length;
    },
    place() {
      return this.$store.state.city_name;
    },
    items() {
      return this.$store.state.attractionArr.slice(0, this.item_n);
    },
    imgWidth() {
      return "320px";
    },
    imgHeight() {
      return "320px";
    },
  },
  methods: {
    itemRatingScore(item) {
      return item["ratingScore"];
    },
    loadMore() {
      this.item_n += 9;
    },
    redirectToAttraction(item) {
      this.$store.commit("changeItemId", item.id);
      this.$router.push({ name: "attraction", query: { id: item.id } });
    },
  },
};
</script>

<style module>
h1.header {
  text-align: center;
}

.content-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 15px;
  margin-left: auto;
  margin-right: auto;
}

.grid-item {
  width: 100%;
  height: 100%;
}

div.item-description .title {
  margin: 0;
}

.place {
  color: #2e86c1;
}

@media only screen and (max-width: 500px) {
  h1.header {
    font-size: 22px;
  }

  .content-container {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }

  .grid-item {
    width: 350px;
    height: 400px;
    margin: auto;
  }

  .item-description {
    text-align: center;
    font-size: 12px;
  }
}
</style>