<template>
  <div>
    <HeaderAndNav/>
    <div class="width-control">
      <div class="row-container">
        <h1>{{ restaurantName }}</h1>
        <div class="row-container">
          <BigHeart/>
          <ShareButton/>
        </div>
      </div>
      <div :class="$style['description-container']">
        <RatingSection starCount="5"/>
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
        <div :class="$style['rating-and-reviews-section']">
          <h3>Ratings and reviews</h3>
          <RatingSection star-count="5"/>
          <hr>
          <h4>Ratings</h4>
          <div>
            <div :class="$style['rating-type']">
              <font-awesome-icon icon="utensils"/>
              <span>Food</span>
            </div>
            <RatingSection starCount="4"/>
          </div>
          <div>
            <div :class="$style['rating-type']">
              <font-awesome-icon icon="concierge-bell"/>
              <span>Service</span>
            </div>
            <RatingSection starCount="5"/>
          </div>
          <div>
            <div :class="$style['rating-type']">
              <font-awesome-icon icon="wallet"/>
              <span>Value</span>
            </div>
            <RatingSection starCount="3.5"/>
          </div>
          <div>
            <div :class="$style['rating-type']">
              <font-awesome-icon icon="spa"/>
              <span>Atmosphere</span>
            </div>
            <RatingSection starCount="1.3"/>
          </div>
        </div>
        <div :class="$style['details-section']">
          <h3>Details</h3>
          <div>
            <h6>PRICE RANGE</h6>
            <span>1,000 - 10,000VND</span>
          </div>
          <div>
            <h6>CUISINES</h6>
            <span>test, test, test</span>
          </div>
          <div>
            <h6>SPECIAL DIETS</h6>
            <span>test, test, test,</span>
          </div>
        </div>
        <div :class="$style['location-and-contact-section']">
          <div :id="$style.map">
            <!--TODO: Crawl google map link-->
            <iframe
                allowfullscreen=""
                height="450" loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2376825569063!2d106.68680511502117!3d10.793099361836532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528cd9a13a0a5%3A0x8b18b057ab3b248b!2zQ-G7pWMgR-G6oWNoIFF1w6Fu!5e0!3m2!1svi!2s!4v1633419726308!5m2!1svi!2s"
                style="border:0;" width="600"></iframe>
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
  // props: ['restaurantName'],
  data() {
    return {
      restaurantName: 'Restaurant name',
      address: '14 Nguyen Truong To, P2, Vung Tau, Vietnam',
      website: 'https://www.google.com',
      phone: '+84 12345789',
      openTime: '08:00 AM'
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
  grid-template-columns: 0.7fr 0.7fr 1fr;
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