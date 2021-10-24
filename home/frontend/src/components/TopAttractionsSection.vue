<template>
  <div>
    <h1 :class="$style.header">Top Attractions in {{ place }}</h1>
    <div :class="$style['content-container']" class="width-control">
      <VerticalItem v-for="(item, i) in items" :key="i"
                    :class="$style['grid-item']"
                    :imgSrc="item.images[4]"
                    :itemName="item.name"
                    :img-width="imgWidth"
                    :img-height="imgHeight"/>
    </div>
    <LoadMoreButton @loadMore="loadMore"/>
  </div>
</template>

<script>
import VerticalItem from "./VerticalItem";
import LoadMoreButton from "./LoadMoreButton";

export default {
  name: 'TopAttractionsSection',
  components: {LoadMoreButton, VerticalItem},
  computed: {
    place() {
      // return this.$store.state.place.toUpperCase();
      return 'Da Lat'.toUpperCase();
    },
    items() {
      return this.$store.state.attractionArr;
    },
    imgWidth() {
      return '320px';
    },
    imgHeight() {
      return '320px';
    }
  },
  methods: {
    getAttraction(n) {
      for (let i = 0; i < n; ++i) {
        this.$store.dispatch('getAttraction');
      }
    },
    loadMore() {
      this.getAttraction(9);
    }
  },
  beforeMount() {
    this.getAttraction(9);
  },
  beforeDestroy() {
    this.$store.commit('clearAllAttractions');
  }
}
</script>

<style module>
h1.header {
  text-align: center;
}

.content-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
  margin-left: auto;
  margin-right: auto;
}

.grid-item {
  width: 100%;
  height: 100%;
}
</style>