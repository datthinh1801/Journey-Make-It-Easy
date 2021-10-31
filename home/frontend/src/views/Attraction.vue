<template>
  <div>
    <HeaderAndNav />
    <div class="width-control">
      <div class="row-container" :class="$style['item-header']">
        <h1>{{ name }}</h1>
        <div class="row-container">
          <BigHeart />
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
          <div class="phone-info" v-if="phoneNumber">
            <font-awesome-icon :icon="['fas','phone-alt']" />
            <span>{{ phoneNumber }}</span>
          </div>
          <div class="website" v-if="website">
            <a :href="website" target="_blank">
              <font-awesome-icon icon="external-link-alt" />
              <span>Website</span>
            </a>
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
      <ImageSlider :images="images" />
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
      <!-- TODO: Add a list of services here! -->
    </div>
  </div>
</template>

<script>
import HeaderAndNav from "../components/HeaderAndNav";
import BigHeart from "../components/BigHeart";
import ShareButton from "../components/ShareButton";
import RatingSection from "../components/RatingSection";
import ImageSlider from "../components/ImageSlider";

import {
  library
} from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons"

library.add(faAngleDoubleRight);

export default {
  name: 'Attraction',
  components: {
    RatingSection,
    ShareButton,
    BigHeart,
    HeaderAndNav,
    ImageSlider
  },
  data() {
    return {}
  },
  computed: {
    item() {
      return this.$store.state.item;
    },
    name() {
      return this.item['name'];
    },
    about() {
      return this.item['about'];
    },
    address() {
      return this.item['address'];
    },
    mapURL() {
      return `https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s${this.address}!6i13`;
    },
    admissionTicket() {
      return this.item['admissionTicket'];
    },
    phoneNumber() {
      return this.item['phone'];
    },
    openTime() {
      return this.item['openTime'];
    },
    suggestedDuration() {
      return this.item['suggestedDuration'];
    },
    ratingScore() {
      return this.item['ratingScore'];
    },
    numberVoting() {
      return this.item['numberVoting'];
    },
    images() {
      let imgObjs = this.item['images'];
      let imgs = [];
      imgObjs.forEach(imgObj => {
        imgs.push(imgObj['link']);
      });
      return imgs;
    },
    website() {
      return this.item['website'];
    }
  },
  beforeMount() {
    this.$store.dispatch('getAttractionDetail', this.$store.state.currentItemName);
  }
}

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
  height: 200px;
  margin-bottom: 100px;
}

.map iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>