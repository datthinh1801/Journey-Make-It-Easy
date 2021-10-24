<template>
  <div>
    <HeaderAndNav/>
    <h1 :class="$style.head">Hotels in {{ place }}</h1>
    <div :class="$style['content-list']">
      <FilterPanel :id="$style['filter-panel']"/>
      <div :id="$style['item-list-section']">
        <HorizontalItem v-for="(item, i) in items" :key="i"
                        :item-name="item.name"
                        :item-height="itemHeight"
                        :img-src="item.images[0]"
                        :img-height="imgHeight"
                        :img-width="imgWidth"
        >
          <div :class="$style['item-detail-container']">
            <div>
              <h5>Top Room Features</h5>
              <ul>
                <li v-for="i in minLen(getRoomFeatures(item))" :key="i">
                  {{ getRoomFeatures(item)[i] }}
                </li>
              </ul>
            </div>
            <div>
              <h5>Top Room Types</h5>
              <ul>
                <li v-for="i in minLen(getRoomTypes(item))" :key="i">
                  {{ getRoomTypes(item)[i] }}
                </li>
              </ul>
            </div>
            <div>
              <h5>Top Amenities</h5>
              <ul>
                <li v-for="i in minLen(getPropAmenities(item))" :key="i">
                  {{ getPropAmenities(item)[i] }}
                </li>
              </ul>
            </div>
          </div>
        </HorizontalItem>
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
    },
    imgWidth() {
      return '250px';
    },
    imgHeight() {
      return this.itemHeight;
    },
    itemHeight() {
      return '250px';
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
    },
    minLen(list) {
      return Math.min(3, list.length);
    },
    getAmenities(item) {
      return item.amenities;
    },
    getRoomFeatures(item) {
      return this.getAmenities(item).room_features;
    },
    getRoomTypes(item) {
      return this.getAmenities(item).room_types;
    },
    getPropAmenities(item) {
      return this.getAmenities(item).property_amenities;
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
  width: 700px;
  margin-left: 10px;
}

.item-detail-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.item-detail-container h5 {
  margin: 0;
}

.item-detail-container div ul {
  margin: 0;
  padding: 0;
}

.item-detail-container div li {
  font-size: 14px;
  color: #555;
  margin: 10px 0 10px 5px;
  list-style: none;
}

.item-detail-container div li::before {
  content: '\2714';
}
</style>