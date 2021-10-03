<template>
  <div>
    <HeaderAndNav/>
    <div class="width-control">
      <h1>{{ restaurantName }}</h1>
      <div :class="$style['description-container']">
        <div class="row-container">
          <RatingSection/>
          <div class="row-container">
            <BigHeart/>
            <ShareButton/>
          </div>
        </div>
        <div>
          <span :class="$style['address-info']">
            <font-awesome-icon icon="map-marked-alt"/>
            <span>{{ address }}</span>
          </span>
          |
          <span :class="$style['phone-info']">
          <font-awesome-icon :icon="['fas','phone-alt']"/>
          <span>Phone: <span>{{ phone }}</span></span>
          </span>
          |
          <span :class="$style.website">
            <a :href="website" target="_blank">
              <font-awesome-icon icon="window-maximize"/>
              <span>Website</span>
            </a>
          </span>
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
import {faPhoneAlt, faWindowMaximize, faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";

library.add(faPhoneAlt, faWindowMaximize, faMapMarkedAlt);


export default {
  components: {ShareButton, BigHeart, RatingSection, HeaderAndNav,},
  // props: ['restaurantName'],
  data() {
    return {
      restaurantName: 'Restaurant name',
      address: '14 Nguyen Truong To, P2, Vung Tau, Vietnam',
      website: 'https://www.google.com',
      phone: '+84 12345789'
    }
  }
}
</script>

<style module>
h1 {
  text-align: left;
}

.description-container {
}

.address-info {
  cursor: pointer;
}

.address-info span {
  margin-left: 5px;
}

.address-info:hover span {
  text-decoration: underline;
}

.phone-info {
  cursor: pointer;
}

.phone-info span:not(span:only-child) {
  margin-left: 5px;
}

.phone-info:hover span span {
  text-decoration: underline;
}

.website a {
  text-decoration: none;
  color: black;
}

.website a span {
  margin-left: 5px;
}

.website:hover a span {
  text-decoration: underline;
}
</style>