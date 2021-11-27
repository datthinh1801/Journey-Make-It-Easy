<template>
  <div v-if="!isFetching">
    <HeaderAndNav />
    <div class="width-control">
      <div class="row-container" :class="$style['item-header']">
        <h1>{{ name }}</h1>
        <div class="row-container">
          <ShareButton />
        </div>
      </div>
      <div>
        <RatingSection :star-count="ratingScore" :rating-count="numberVoting" />
        <div class="info-container">
          <div class="address-info" v-if="address">
            <font-awesome-icon icon="map-marked-alt" />
            <span>{{ address }}</span>
          </div>
        </div>
        <div class="info-container">
          <div class="roboto open-time-container" v-if="openTime">
            <font-awesome-icon icon="clock" />
            <span>Open Time: {{ openTime }}</span>
          </div>
          <div class="roboto open-time-container" v-if="suggestedDuration">
            <font-awesome-icon icon="angle-double-right" />
            <span>Suggested Duration: {{ suggestedDuration }}</span>
          </div>
          <div class="roboto open-time-container" v-if="admissionTicket">
            <font-awesome-icon icon="dollar-sign" />
            <span>Admission Fee: {{ admissionTicket }}</span>
          </div>
        </div>
      </div>
      <ImageSlider />
      <div :class="$style['overview-container']">
        <div :class="$style['overview-text']">
          <h2>About</h2>
          <p>{{ about }}</p>
        </div>
        <div v-if="address" :class="$style.map">
          <h2>Location</h2>
          <iframe loading="lazy" :src="mapURL"></iframe>
        </div>
      </div>
      <reviewing-section
        :numberVoting="numberVoting"
        :ratingScore="ratingScore"
        :type="'Attraction'"
      />
    </div>
  </div>
</template>

<script>
import HeaderAndNav from "../components/HeaderAndNav";
import ShareButton from "../components/ShareButton";
import RatingSection from "../components/RatingSection";
import ImageSlider from "../components/ImageSlider";
import ReviewingSection from "../components/ReviewingSection.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleDoubleRight);

export default {
  name: "Attraction",
  components: {
    RatingSection,
    ShareButton,
    HeaderAndNav,
    ImageSlider,
    ReviewingSection,
  },
  data() {
    return {};
  },
  computed: {
    isFetching() {
      return !this.$store.state.item["id"];
    },
    item() {
      return this.$store.state.item;
    },
    name() {
      return this.item["name"];
    },
    about() {
      return this.item["about"];
    },
    address() {
      return this.item["address"];
    },
    mapURL() {
      return `https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s${this.address}!6i13`;
    },
    admissionTicket() {
      return this.item["admissionTicket"];
    },
    openTime() {
      return this.item["openTime"];
    },
    suggestedDuration() {
      return this.item["suggestedDuration"];
    },
    ratingScore() {
      return this.item["ratingScore"];
    },
    numberVoting() {
      return this.item["numberVoting"];
    },
  },
  methods: {},
  beforeCreate() {
    const params = new URLSearchParams(window.location.search);
    if (this.$store.state.currentItemId !== "") {
      this.$store
        .dispatch("getAttractionDetail", this.$store.state.currentItemId)
        .then(() => {
          document.title = `🏖 Attraction | ${this.$store.state.item.name}`;
        });
    } else if (params.get("id")) {
      this.$store.dispatch("getAttractionDetail", params.get("id")).then(() => {
        document.title = `🏖 Attraction | ${this.$store.state.item.name}`;
      });
    } else {
      this.$router.push("/");
    }
  },
};
</script>

<style module>
.item-header {
  display: flex;
  align-items: center;
}

.item-header div div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

h1 {
  text-align: left;
}

.overview-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 20px;
  margin-top: 50px;
}

.map {
  width: 100%;
  height: 300px;
  margin-bottom: 100px;
}

.map iframe {
  width: 100%;
  height: 100%;
  border: none;
}

@media only screen and (max-width: 500px) {
  .item-header h1 {
    font-size: 22px;
  }

  .overview-container {
    grid-template-columns: 1fr;
    grid-gap: 0;
    margin-top: 0;
  }

  .map {
    height: 200px;
    margin-bottom: 50px;
  }
}
</style>