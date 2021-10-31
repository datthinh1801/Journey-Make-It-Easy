<template>
  <div>
    <HeaderAndNav/>
    <div class="width-control">
      <div class="row-container">
        <h1>{{ name }}</h1>
        <div class="row-container">
          <BigHeart/>
          <ShareButton/>
        </div>
      </div>
      <div :class="$style['description-container']">
        <RatingSection :starCount="ratingScore" :ratingCount="numberVoting"/>
        <div class="info-container">
          <div class="address-info">
            <font-awesome-icon icon="map-marked-alt"/>
            <span>{{ address }}</span>
          </div>
          <div class="phone-info">
            <font-awesome-icon :icon="['fas','phone-alt']"/>
            <span>Phone: <span>{{ phone }}</span></span>
          </div>
          <div class="website">
            <a :href="website" target="_blank">
              <font-awesome-icon icon="external-link-alt"/>
              <span>Website</span>
            </a>
          </div>
        </div>
        <div class="roboto open-time-container" :class="$style['open-time']">
          <font-awesome-icon icon="clock"/>
          <span>Open Time: {{ openTime }}</span>
        </div>
      </div>
      <div :class="$style['image-section']">
        <img alt="first-img" src="images/linh-phuoc-pagoda.jpg">
        <img alt="first-img" src="images/linh-phuoc-pagoda.jpg">
        <img alt="first-img" src="images/linh-phuoc-pagoda.jpg">
      </div>
      <div :class="$style['information-section-container']">
        <div :class="$style['details-section']">
          <h3>Details</h3>
          <div>
            <h6>PRICE RANGE</h6>
            <span>{{priceRange}}</span>
          </div>
          <div>
            <h6>CUISINES</h6>
            <span>{{cuisines}}</span>
          </div>
          <div>
            <h6>SPECIAL DIETS</h6>
            <span>{{specialDiets}}</span>
          </div>
        </div>
        <div :class="$style['location-and-contact-section']">
          <div :id="$style.map">
            <!--TODO: Crawl google map link-->
<!-- Reference: https://www.embedgooglemap.net/ -->
            <iframe
                allowfullscreen=""
                height="450" loading="lazy"
                src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sTHPT+mac+dinh+chi!6i13"
                tyle="border:0;" width="600"></iframe>
          </div>
          <div :class="$style.info">
          <span class="address-info">
            <font-awesome-icon icon="map-marker-alt"/>
            <span>{{ address }}</span>
          </span>
            <span class="address-info">
          <font-awesome-icon :icon="['fas','phone-alt']"/>
          <span>Phone: <span>{{ phone }}</span></span>
          </span>
            <span class="website">
            <a :href="website" target="_blank">
              <font-awesome-icon icon="window-maximize"/>
              <span>Website</span>
            </a>
          </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAndNav from "../components/HeaderAndNav";
import RatingSection from "../components/RatingSection";
import BigHeart from "../components/BigHeart";
import ShareButton from "../components/ShareButton";

import {library} from "@fortawesome/fontawesome-svg-core";
import {
  faPhoneAlt,
  faExternalLinkAlt,
  faMapMarkedAlt,
  faClock,
  faMapMarkerAlt,
  faUtensils,
  faConciergeBell,
  faWallet,
  faSpa
} from "@fortawesome/free-solid-svg-icons";

library.add(faPhoneAlt, faExternalLinkAlt, faMapMarkedAlt, faClock, faMapMarkerAlt, faUtensils, faConciergeBell, faWallet, faSpa);


export default {
  components: {ShareButton, BigHeart, RatingSection, HeaderAndNav,},
  data() {
    return {
    }
  },
  computed: {
    item() {
      return this.$store.state.item;
    },
    name() {
      return this.item['name'];
    },
    address() {
      return this.item['address'];
    },
    openTime() {
      return this.item['openTime'];
    },
    phone() {
      return this.item['phone'];
    },
    webiste() {
      return this.item['website'];
    },
    cuisines() {
      return this.item['cuisines'];
    },
    meals() {
      return this.item['meals'];
    },
    specialDiets() {
      return this.item['specialDiets'];
    },
    features() {
      return this.item['features'];
    },
    numberVoting(){
      return this.item['numberVoting'];
    },
    ratingScore() {
      return this.item['ratingScore'];
    },
    priceRange() {
      return this.item['priceRange'];
    }
  },
  beforeMount() {
    this.$store.dispatch('getRestaurantDetail', this.$store.state.currentItemName);
  }
}
</script>

<style module>
h1 {
  text-align: left;
}

.description-container {
}

.open-time {
  margin-bottom: 5px;
}

.image-section {
  display: flex;
  height: 400px;
  width: 100%;
  overflow: hidden;
}

.image-section img {
  max-height: 100%;
  margin: 2px;
}

.information-section-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 300px;
  grid-gap: 30px;
  margin-top: 20px;
}

.information-section-container > div {
  box-shadow: 0 0 1px 1px #aaa;
  border-radius: 4px;
  padding: 10px 20px;
}

.rating-and-reviews-section > div {
  display: flex;
  justify-content: space-between;
}

.rating-and-reviews-section > div > div.rating-type > svg {
  width: 16px;
  margin-right: 10px;
}

.rating-and-reviews-section hr {
  width: 100%;
  max-width: 100%;
}

.rating-and-reviews-section div {
  font-weight: 300;
  font-size: 14px;
}

span {
  font-family: 'Roboto', sans-serif;
}

.details-section h6 {
  margin: 5px 0 5px 0;
  color: #aaa;
}

.details-section div {
  margin: 20px 0;
  font-weight: 300;
}

#map {
  height: 60%;
  margin: auto auto 20px auto;
}

.location-and-contact-section iframe {
  max-width: 100%;
  max-height: 100%;
}

.info {
  display: flex;
  flex-direction: column;
}

.info span {
  margin: 5px 0;
  font-weight: 300;
}

.info > span > span,
.info > span > a > span {
  margin-left: 5px;
  font-size: 14px;
}

</style>