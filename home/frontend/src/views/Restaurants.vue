<template>
  <div>
    <HeaderAndNav/>
    <h1 :class="$style.head">Restaurants in {{ place }}</h1>
    <div :class="$style['content-list']">
      <FilterPanel :id="$style['filter-panel']"/>
      <div :id="$style['item-list-section']">
        <HorizontalItem v-for="(item, i) in items" :key="i"
                        :item-name="item.name"
                        :item-height="itemHeight"
                        :img-src="item.images[0]"
                        :img-width="imgWidth"
                        :img-height="imgHeight">
          <div :class="$style['item-detail-container']">
            <div>
              <font-awesome-icon icon="dollar-sign" :class="$style.price"/>
              <span>{{ item.details.price_range }}</span>
            </div>
            <div>
              <font-awesome-icon icon="concierge-bell" :class="$style.cuisine"/>
              <span>{{ item.details.cuisines }}</span>
            </div>
            <div>
              <font-awesome-icon icon="glass-cheers" :class="$style.specialty"/>
              <span>{{ item.details.special_diets }}</span>
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

import {library} from "@fortawesome/fontawesome-svg-core";
import {faDollarSign, faConciergeBell, faGlassCheers} from "@fortawesome/free-solid-svg-icons";

library.add(faDollarSign, faConciergeBell, faGlassCheers);

export default {
  name: 'Restaurants',
  components: {LoadMoreButton, HeaderAndNav, FilterPanel, HorizontalItem},
  computed: {
    place() {
      // return this.$store.state.place.toUpperCase();
      return 'Da Lat'.toUpperCase();
    },
    items() {
      return this.$store.state.restaurantArr;
    },
    itemHeight() {
      return '200px';
    },
    imgWidth() {
      return '200px';
    },
    imgHeight() {
      return this.itemHeight;
    }
  },
  methods: {
    getItem(n) {
      for (let i = 0; i < n; ++i) {
        this.$store.dispatch('getRestaurant');
      }
    },
    loadMore() {
      this.getItem(9);
    }
  },
  mounted() {
    this.$store.commit('changePath', '/restaurants');
    this.getItem(9);
  },
  beforeDestroy() {
    this.$store.commit('clearAllRestaurants');
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

.item-detail-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item-detail-container div {
  font-size: 14px;
}

.item-detail-container div {
  display: flex;
  align-items: center;
  margin-top: 15px;
}

.item-detail-container .price,
.item-detail-container .cuisine,
.item-detail-container .specialty {
  font-size: 18px;
  width: 20px;
  margin-right: 5px;
}

.item-detail-container .price {
  color: #1f891f;
}

.item-detail-container .cuisine {
  color: #e5d12e;
}

.item-detail-container .specialty {
  color: #bc3131;
}
</style>