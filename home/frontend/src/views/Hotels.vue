<template>
  <div>
    <HeaderAndNav/>
    <h1 :class="$style.head">Hotels in {{ place }}</h1>
    <div :class="$style['content-list']">
      <FilterPanel :id="$style['filter-panel']"/>
      <div :id="$style['item-list-section']">
        <HorizontalItem v-for="item in items" :key="item.id"
                        :item-height="itemHeight"
                        :item-width="itemWidth"
                        :img-src="item.images[0].link"
                        :img-height="imgHeight"
                        :img-width="imgWidth"
        >
          <div :class="$style['item-detail-container']">
            <div :class="$style['item-detail-top']">
              <h3>{{ item.name }}</h3>
              <RatingSection rating-count="item.numberVoting" star-count="ratingScore"/>
              <hr>
            </div>
            <div :class="$style['item-detail-bottom']">
              <div>
                <h5>Room Types</h5>
                <ul>
                  <!--TODO: Fix the unknown empty item-->
                  <li v-for="i in minLen(getRoomTypes(item))" :key="i">
                    {{ getRoomTypes(item)[i] }}
                  </li>
                </ul>
              </div>
              <div>
                <h5>Room Features</h5>
                <ul>
                  <li v-for="i in minLen(getRoomFeatures(item))" :key="i">
                    {{ getRoomFeatures(item)[i] }}
                  </li>
                </ul>
              </div>
              <div>
                <h5>Amenities</h5>
                <ul>
                  <li v-for="i in minLen(getPropAmen(item))" :key="i">
                    {{ getPropAmen(item)[i] }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </HorizontalItem>
        <LoadMoreButton v-if="endOfArray" @loadMore="loadMore"/>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAndNav from "../components/HeaderAndNav";
import FilterPanel from "../components/FilterPanel";
import HorizontalItem from "../components/HorizontalItem";
import LoadMoreButton from "../components/LoadMoreButton";
import RatingSection from "../components/RatingSection";

export default {
  name: 'Hotels',
  components: {RatingSection, LoadMoreButton, HeaderAndNav, FilterPanel, HorizontalItem},
  data() {
    return {
      item_n: 10,
    }
  },
  computed: {
    endOfArray() {
      // TODO: Replace this after data is ok
      return this.item_n < this.$store.state.hotelArr.filter(item => item.images.length > 0)
          .length;
    },
    place() {
      return this.$store.state.city;
    },
    items() {
      // TODO: Replace this after data is ok
      return this.$store.state.hotelArr.filter(item => item.images.length > 0)
          .slice(0, this.item_n);
    },
    imgWidth() {
      return '250px';
    },
    imgHeight() {
      return this.itemHeight;
    },
    itemHeight() {
      return '250px';
    },
    itemWidth() {
      return "700px";
    },
  },
  methods: {
    loadMore() {
      this.item_n += 10;
    },
    minLen(list) {
      return Math.min(3, list.length);
    },
    getRoomFeatures(item) {
      return item['roomFeatures'].split(', ');
    },
    getRoomTypes(item) {
      return item['roomTypes'].split(', ');
    },
    getPropAmen(item) {
      return item['propertyAmenities'].split(', ');
    }
  },
  mounted() {
    this.$store.commit('changePath', '/hotels');
    this.$store.dispatch('getHotel', this.place);
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
  margin-left: 10px;
}

.item-detail-container {
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  padding: 10px;
}

.item-detail-top {
  grid-row: 1/2;
}

.item-detail-top h3 {
  margin: 0;
}

.item-detail-top hr {
  width: 100%;
  max-width: 100%;
}

.item-detail-bottom {
  grid-row: 2/7;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}

.item-detail-bottom h5 {
  margin: 0;
}

.item-detail-bottom ul {
  margin: 0;
  padding: 0;
}

.item-detail-bottom li {
  margin: 5px 0;
  font-size: 14px;
  color: #444;
  list-style: none;
}

.item-detail-bottom li::before {
  content: '\2714';
}
</style>