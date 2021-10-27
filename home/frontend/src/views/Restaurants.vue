<template>
  <div>
    <HeaderAndNav/>
    <h1 :class="$style.head">Restaurants in {{ place }}</h1>
    <div :class="$style['content-list']">
      <FilterPanel :id="$style['filter-panel']"/>
      <div :id="$style['item-list-section']">
        <HorizontalItem v-for="item in items" :key="item.id"
                        :item-height="itemHeight"
                        :item-width="itemWidth"
                        :img-src="item.images[0].link"
                        :img-width="imgWidth"
                        :img-height="imgHeight"
                        @click.native="redirectToRestaurant(item)">
          <div :class="$style['item-detail-container']">
            <div :class="$style['item-detail-top']">
              <h3>{{ item.name }}</h3>
              <RatingSection star-count="item.ratingScore" rating-count="item.numberVoting"/>
              <hr>
            </div>
            <div :class="$style['item-detail-bottom']">
              <div v-if="item.priceRange">
                <font-awesome-icon icon="dollar-sign" :class="$style.price"/>
                <span>{{ item.priceRange }}</span>
              </div>
              <div v-if="item.cuisines">
                <font-awesome-icon icon="concierge-bell" :class="$style.cuisine"/>
                <span>{{ item.cuisines }}</span>
              </div>
              <div v-if="item.specialDiets">
                <font-awesome-icon icon="glass-cheers" :class="$style.specialty"/>
                <span>{{ item.specialDiets }}</span>
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

import {library} from "@fortawesome/fontawesome-svg-core";
import {faDollarSign, faConciergeBell, faGlassCheers} from "@fortawesome/free-solid-svg-icons";
import RatingSection from "../components/RatingSection";

library.add(faDollarSign, faConciergeBell, faGlassCheers);

export default {
  name: 'Restaurants',
  components: {RatingSection, LoadMoreButton, HeaderAndNav, FilterPanel, HorizontalItem},
  data() {
    return {
      item_n: 10,
    }
  },
  computed: {
    endOfArray() {
      return this.item_n < this.$store.state.restaurantArr.length;
    },
    place() {
      return this.$store.state.city;
    },
    items() {
      return this.$store.state.restaurantArr.slice(0, this.item_n);
    },
    itemHeight() {
      return '200px';
    },
    itemWidth() {
      return '600px';
    },
    imgWidth() {
      return '200px';
    },
    imgHeight() {
      return this.itemHeight;
    }
  },
  methods: {
    loadMore() {
      this.item_n += 10;
    },
    redirectToRestaurant(item) {
      this.$store.commit('changeItemName', item.name);
      this.$router.push('restaurant');
    }
  },
  mounted() {
    // FIXME: What is this?
    this.$store.commit('changePath', '/restaurants');
    this.$store.dispatch('getRestaurant', this.place);
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
  margin-left: 10px;
}

.item-detail-container {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.item-detail-top {
}

.item-detail-top h3 {
  margin: 0;
}

.item-detail-top hr {
  max-width: 100%;
  width: 100%;
}

.item-detail-bottom {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
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