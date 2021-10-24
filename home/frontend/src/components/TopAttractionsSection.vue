<template>
  <div>
    <h1 :class="$style.header">Top Attractions in {{ place }}</h1>
    <div :class="$style['content-container']" class="width-control">
      <VerticalItem v-for="(item, i) in items" :key="i"
                    :class="$style['grid-item']"
                    :imgSrc="item.images[0].link"
                    :itemName="item.name"
                    :img-width="imgWidth"
                    :img-height="imgHeight"/>
    </div>
    <LoadMoreButton @loadMore="loadMore"
                    v-if="endOfArray"/>
  </div>
</template>

<script>
import VerticalItem from "./VerticalItem";
import LoadMoreButton from "./LoadMoreButton";

export default {
  name: 'TopAttractionsSection',
  components: {LoadMoreButton, VerticalItem},
  data() {
    return {
      item_n: 9,
    }
  },
  computed: {
    endOfArray() {
      return this.item_n < this.$store.state.attractionArr.length;
    },
    place() {
      return this.$store.state.city;
    },
    items() {
      return this.$store.state.attractionArr.slice(0, this.item_n);
    },
    imgWidth() {
      return '320px';
    },
    imgHeight() {
      return '320px';
    }
  },
  methods: {
    loadMore() {
      this.item_n += 9;
    },
    fetchAttraction() {
      this.$store.dispatch('getAttraction', this.place)
    }
  },
  beforeMount() {
    this.fetchAttraction();
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