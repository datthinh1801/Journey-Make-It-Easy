<template>
  <div>
    <HeaderAndNav/>
    <h1 :class="$style.head">Hotels in {{ place }}</h1>
    <div :class="$style['content-list']">
      <FilterPanel :id="$style['filter-panel']"/>
      <div :id="$style['item-list-section']">
        <HorizontalItem v-for="(item, i) in items" :key="i"
                        :item-name="item.name"
                        img-src="images/placeholder_img.png"
        />
        <LoadMoreButton @loadMore="loadMore"/>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAndNav from "../components/HeaderAndNav";
import FilterPanel from "../components/FilterPanel";
import HorizontalItem from "../components/HorizontalItem";
import LoadMoreButton from "../components/LoadMoreButton";

export default {
  name: 'Hotels',
  components: {LoadMoreButton, HeaderAndNav, FilterPanel, HorizontalItem},
  computed: {
    place() {
      // return this.$store.state.place.toUpperCase();
      return 'da lat'.toUpperCase();
    },
    items() {
      return this.$store.state.hotelArr;
    }
  },
  methods: {
    getItem(n) {
      for (let i = 0; i < n; ++i) {
        this.$store.dispatch('getHotel');
      }
    },
    loadMore() {
      this.getItem(9);
    }
  },
  mounted() {
    this.$store.commit('changePath', '/hotels');
    this.getItem(9);
  },
  beforeDestroy() {
    this.$store.commit('clearAllHotels');
  }
}
</script>

<style module>
h1.head {
  text-align: center;
}

.content-list {
  display: flex;
  justify-content: center;
}

#filter-panel {

}

#item-list-section {
  width: 500px;
  margin-left: 10px;
}
</style>