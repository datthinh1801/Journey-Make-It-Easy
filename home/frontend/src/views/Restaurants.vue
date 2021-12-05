<template>
  <div>
    <HeaderAndNav />
    <h1 :class="$style.head">
      Restaurants in <span :class="$style.place">{{ place }}</span>
    </h1>
    <div :class="$style['content-list']">
      <div :id="$style['item-list-section']">
        <HorizontalItem
          v-for="item in items"
          :key="item.id"
          :item-height="itemHeight"
          :item-width="itemWidth"
          :img-src="item.images[0].link"
          :img-width="imgWidth"
          :img-height="imgHeight"
          @click.native="redirectToRestaurant(item)"
        >
          <div :class="$style['item-detail-container']">
            <div :class="$style['item-detail-top']">
              <h3>{{ item.name }}</h3>
              <RatingSection
                star-count="item.ratingScore"
                rating-count="item.numberVoting"
              />
              <hr />
            </div>
            <div :class="$style['item-detail-bottom']">
              <div v-if="item.priceRange.length > 0">
                <font-awesome-icon icon="dollar-sign" :class="$style.price" />
                <b>Price range: </b>
                <span>{{ item.priceRange }}</span>
              </div>
              <div v-if="item.cuisines.length > 0">
                <font-awesome-icon
                  icon="concierge-bell"
                  :class="$style.cuisine"
                /><b>Cuisines: </b>
                <span>{{ getCuisines(item) }}</span>
              </div>
              <div v-if="item.specialDiets.length > 0">
                <font-awesome-icon
                  icon="glass-cheers"
                  :class="$style.specialty"
                /><b>Special Diets: </b>
                <span>{{ getSpecialdiets(item) }}</span>
              </div>
            </div>
          </div>
        </HorizontalItem>
        <LoadMoreButton v-if="hasItems" @loadMore="loadMore" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAndNav from "../components/HeaderAndNav";
import HorizontalItem from "../components/HorizontalItem";
import LoadMoreButton from "../components/LoadMoreButton";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDollarSign,
  faConciergeBell,
  faGlassCheers,
} from "@fortawesome/free-solid-svg-icons";
import RatingSection from "../components/RatingSection";

library.add(faDollarSign, faConciergeBell, faGlassCheers);

export default {
  name: "Restaurants",
  components: {
    RatingSection,
    LoadMoreButton,
    HeaderAndNav,
    HorizontalItem,
  },
  data() {
    return {
      item_n: 10,
      itemHeight: "300px",
      imgWidth: "300px",
    };
  },
  computed: {
    hasItems() {
      return this.item_n < this.$store.state.restaurantArr.length;
    },
    place() {
      return this.$store.state.city_name;
    },
    items() {
      return this.$store.state.restaurantArr.slice(0, this.item_n);
    },
    // itemHeight() {
    //   return "200px";
    // },
    itemWidth() {
      return "800px";
    },
    // imgWidth() {
    //   return "100%";
    // },
    imgHeight() {
      return this.itemHeight;
    },
  },
  methods: {
    loadMore() {
      this.item_n += 10;
    },
    redirectToRestaurant(item) {
      this.$store.commit("changeItemId", item.id);
      this.$router.push({ name: "restaurant", query: { id: item.id } });
    },
    getCuisines(item) {
      return item.cuisines.map((cuisine) => cuisine["value"]).join(", ");
    },
    getSpecialdiets(item) {
      return item.specialDiets
        .map((specialDiet) => specialDiet["value"])
        .join(", ");
    },
    resize_mobile() {
      if (screen.width <= 500) {
        this.itemHeight = "200px";
        this.imgWidth = "100%";
      } else {
        this.itemHeight = "300px";
        this.imgWidth = "300px";
      }
    },
  },
  beforeCreate() {
    const params = new URLSearchParams(window.location.search);
    console.log(params);
    if (this.$store.state.city_id !== "") {
      this.$store
        .dispatch("getRestaurant", this.$store.state.city_id)
        .then(() => {
          document.title = "🥂 Restaurants in " + this.place;
        });
    } else if (params.get("cityid")) {
      this.$store.dispatch("getCityById", params.get("cityid")).then(() => {
        document.title = "🥂 Restaurants in " + this.place;
      });
      this.$store.dispatch("getRestaurant", params.get("cityid"));
    } else {
      this.$router.push("/");
    }
  },
  beforeDestroy() {
    this.$store.commit("clearAllRestaurants");
  },
  mounted() {
    window.addEventListener("resize", this.resize_mobile);
    this.resize_mobile();
  },
};
</script>

<style module>
h1.head {
  text-align: center;
}

.content-list {
  display: flex;
  justify-content: center;
}

#item-list-section {
  margin-left: 10px;
}

.item-detail-container {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.item-detail-top h3 {
  margin: 0;
  font-size: 24px;
}

.item-detail-top hr {
  width: 100%;
  max-width: 100%;
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

.place {
  color: #2e86c1;
}

@media only screen and (max-width: 500px) {
  .item-detail-top h3 {
    font-size: 14px;
  }

  .item-detail-bottom {
    font-size: 13px;
  }

  .item-detail-bottom div {
    margin-bottom: 5px;
  }

  .item-detail-container .price,
  .item-detail-container .cuisine,
  .item-detail-container .specialty {
    font-size: 15px;
    width: 15px;
    margin-right: 5px;
  }

  h1.head {
    text-align: center;
    font-size: 22px;
  }
}
</style>