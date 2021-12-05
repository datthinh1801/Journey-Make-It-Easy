<template>
  <div v-if="!isFetching">
    <HeaderAndNav />
    <div class="width-control">
      <div class="row-container" :class="$style['title-container']">
        <h1>{{ name }}</h1>
        <div class="row-container">
          <ShareButton />
        </div>
      </div>
      <div :class="$style['description-container']">
        <RatingSection :starCount="ratingScore" :ratingCount="numberVoting" />
        <div class="info-container">
          <div class="address-info" v-if="address">
            <font-awesome-icon icon="map-marked-alt" />
            <span>{{ address }}</span>
          </div>
          <div class="phone-info" v-if="phone">
            <font-awesome-icon :icon="['fas', 'phone-alt']" />
            <span
              >Phone: <span>{{ phone }}</span></span
            >
          </div>
          <div class="website" v-if="website">
            <a :href="website" target="_blank">
              <font-awesome-icon icon="external-link-alt" />
              <span>Website</span>
            </a>
          </div>
        </div>
        <div
          class="roboto open-time-container"
          :class="$style['open-time']"
          v-if="openTime"
        >
          <font-awesome-icon icon="clock" />
          <span>Open Time: {{ openTime }}</span>
        </div>
      </div>

      <!-- <image-slider :class="$style['image-section']" /> -->
      <image-slider />

      <div :class="$style['information-section-container']">
        <div :class="$style['details-section']">
          <h3>Details</h3>
          <div>
            <h6>PRICE RANGE</h6>
            <span>{{ priceRange }}</span>
          </div>
          <div>
            <h6>CUISINES</h6>
            <span>{{ cuisines }}</span>
          </div>
          <div>
            <h6>SPECIAL DIETS</h6>
            <span>{{ specialDiets }}</span>
          </div>
        </div>
        <div :class="$style['location-and-contact-section']">
          <div :class="$style.map">
            <iframe
              allowfullscreen=""
              height="450"
              loading="lazy"
              :src="mapURL"
              tyle="border:0;"
              width="600"
            ></iframe>
          </div>
          <div :class="$style.info">
            <span class="address-info">
              <font-awesome-icon icon="map-marker-alt" />
              <span>{{ address }}</span>
            </span>
            <span class="address-info" v-if="phone">
              <font-awesome-icon :icon="['fas', 'phone-alt']" />
              <span
                >Phone: <span>{{ phone }}</span></span
              >
            </span>
            <span class="website" v-if="website">
              <a :href="website" target="_blank">
                <font-awesome-icon icon="external-link-alt" />
                <span>Website</span>
              </a>
            </span>
          </div>
        </div>
      </div>
      <reviewing-section
        :ratingScore="ratingScore"
        :numberVoting="numberVoting"
        :type="'Restaurant'"
      />
    </div>
  </div>
</template>

<script>
import HeaderAndNav from "../components/HeaderAndNav";
import RatingSection from "../components/RatingSection";
import ShareButton from "../components/ShareButton";
import ImageSlider from "../components/ImageSlider";
import ReviewingSection from "../components/ReviewingSection";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhoneAlt,
  faExternalLinkAlt,
  faMapMarkedAlt,
  faClock,
  faMapMarkerAlt,
  faUtensils,
  faConciergeBell,
  faWallet,
  faSpa,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faPhoneAlt,
  faExternalLinkAlt,
  faMapMarkedAlt,
  faClock,
  faMapMarkerAlt,
  faUtensils,
  faConciergeBell,
  faWallet,
  faSpa
);

export default {
  components: {
    ShareButton,
    RatingSection,
    HeaderAndNav,
    ImageSlider,
    ReviewingSection,
  },
  data() {
    return {};
  },
  computed: {
    item() {
      return this.$store.state.item;
    },
    name() {
      return this.item["name"];
    },
    address() {
      return this.item["address"];
    },
    mapURL() {
      return `https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s${this.address}!6i13`;
    },
    openTime() {
      return this.item["openTime"];
    },
    phone() {
      return this.item["phone"];
    },
    website() {
      return this.item["website"];
    },
    cuisines() {
      return (this.item["cuisines"] || [])
        .map((item) => item["value"])
        .join(", ");
    },
    meals() {
      return (this.item["meals"] || []).map((item) => item["value"]).join(", ");
    },
    specialDiets() {
      return (this.item["specialDiets"] || [])
        .map((item) => item["value"])
        .join(", ");
    },
    features() {
      return (this.item["features"] || [])
        .map((item) => item["value"])
        .join(", ");
    },
    numberVoting() {
      return this.item["numberVoting"];
    },
    ratingScore() {
      return this.item["ratingScore"];
    },
    priceRange() {
      return this.item["priceRange"];
    },
    isFetching() {
      return !this.$store.state.item["id"];
    },
  },
  beforeCreate() {
    const params = new URLSearchParams(window.location.search);
    if (this.$store.state.currentItemId !== "") {
      this.$store
        .dispatch("getRestaurantDetail", this.$store.state.currentItemId)
        .then(() => {
          document.title = `🥂 Restaurant | ${this.$store.state.item.name}`;
        });
    } else if (params.get("id")) {
      this.$store.dispatch("getRestaurantDetail", params.get("id")).then(() => {
        document.title = `🥂 Restaurant | ${this.$store.state.item.name}`;
      });
    } else {
      this.$router.push("/");
    }
  },
};
</script>

<style module>
.title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  text-align: left;
}

.open-time {
  margin-bottom: 5px;
}

.image-section {
  height: 400px;
  width: 100%;
}

.information-section-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 400px;
  grid-gap: 30px;
  margin-top: 20px;
}

.information-section-container > div {
  box-shadow: 0 0 1px 1px #ccc;
  border-radius: 3px;
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
  font-family: "Roboto", sans-serif;
}

.details-section h6 {
  margin: 5px 0 5px 0;
  color: #aaa;
}

.details-section div {
  margin: 20px 0;
  font-weight: 400;
}

.map {
  height: 60%;
  margin: auto auto 20px auto;
  border-radius: 10px;
}

.map iframe {
  width: 100%;
  height: 100%;
  border: none;
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

@media only screen and (max-width: 500px) {
  .title-container h1 {
    font-size: 22px;
  }

  .information-section-container {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;
  }

  .information-section-container > div {
    padding: 5px 10px;
  }

  .details-section h3 {
    font-size: 18px;
  }

  .details-section h6 {
    font-size: 10px;
  }

  .details-section div {
    font-size: 14px;
    margin: 10px 0;
  }

  .map {
    margin: auto;
  }
}
</style>