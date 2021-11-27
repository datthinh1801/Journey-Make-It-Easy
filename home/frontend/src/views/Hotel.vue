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
        <rating-section :starCount="ratingScore" :numberVoting="numberVoting" />
        <div class="info-container">
          <div class="address-info" v-if="address">
            <font-awesome-icon icon="map-marked-alt" />
            <span>{{ address }}</span>
          </div>
          <div class="phone-info" v-if="phoneNumber">
            <font-awesome-icon :icon="['fas', 'phone-alt']" />
            <span>{{ phoneNumber }}</span>
          </div>
          <div class="website" v-if="website">
            <a :href="website" target="_blank">
              <font-awesome-icon icon="external-link-alt" />
              <span>Website</span>
            </a>
          </div>
        </div>
      </div>

      <ImageSlider />

      <div :class="$style['about-section']">
        <h2>About</h2>
        <hr />
        <div :class="$style['about-detail']">
          <div>
            <rating-section
              :starCount="ratingScore"
              :numberVoting="numberVoting"
            />
            <hr />
            <p>{{ about }}</p>
          </div>
          <div :class="$style['item-listing-container']">
            <div>
              <h3>Room Types</h3>
              <ul>
                <li v-for="(roomType, i) in roomTypes" :key="i">
                  {{ roomType }}
                </li>
              </ul>
            </div>
            <div>
              <h3>Room Features</h3>
              <ul>
                <li v-for="(roomFeature, i) in roomFeatures" :key="i">
                  {{ roomFeature }}
                </li>
              </ul>
            </div>
            <div>
              <h3>Amenities</h3>
              <ul>
                <li v-for="(amenity, i) in amenities" :key="i">
                  {{ amenity }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.map">
        <h2>Location</h2>
        <iframe loading="lazy" :src="mapURL"></iframe>
      </div>
      <reviewing-section
        :numberVoting="numberVoting"
        :ratingScore="ratingScore"
        :type="'Stay'"
      />
    </div>
  </div>
</template>

<script>
import HeaderAndNav from "../components/HeaderAndNav.vue";
import ShareButton from "../components/ShareButton.vue";
import RatingSection from "../components/RatingSection.vue";
import ImageSlider from "../components/ImageSlider.vue";
import ReviewingSection from "../components/ReviewingSection.vue";

export default {
  name: "Hotel",
  components: {
    HeaderAndNav,
    ShareButton,
    RatingSection,
    ImageSlider,
    ReviewingSection,
  },
  computed: {
    name() {
      return this.$store.state.item.name;
    },
    ratingScore() {
      return this.$store.state.item["ratingScore"];
    },
    numberVoting() {
      return this.$store.state.item["numberVoting"];
    },
    address() {
      return this.$store.state.item["address"];
    },
    mapURL() {
      return `https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s${this.address}!6i13`;
    },
    phoneNumber() {
      return this.$store.state.item["phone"];
    },
    website() {
      return this.$store.state.item["email"];
    },
    about() {
      return this.$store.state.item["about"];
    },
    roomFeatures() {
      return (this.$store.state.item["roomFeatures"] || []).map(
        (item) => item["value"]
      );
    },
    roomTypes() {
      return (this.$store.state.item["roomTypes"] || []).map(
        (item) => item["value"]
      );
    },
    amenities() {
      return (this.$store.state.item["propertyAmenities"] || []).map(
        (item) => item["value"]
      );
    },
    isFetching() {
      return !this.$store.state.item["id"];
    },
  },
  beforeCreate() {
    const params = new URLSearchParams(window.location.search);
    if (this.$store.state.currentItemId !== "") {
      this.$store
        .dispatch("getHotelDetail", this.$store.state.currentItemId)
        .then(() => {
          document.title = `🏨 Hotel | ${this.$store.state.item.name}`;
        });
    } else if (params.get("id")) {
      this.$store.dispatch("getHotelDetail", params.get("id")).then(() => {
        document.title = `🏨 Hotel | ${this.$store.state.item.name}`;
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

.about-section {
  width: 100%;
}

.about-section hr {
  width: 100%;
  max-width: 100%;
}

.about-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
}

.about-detail p {
  line-height: 1.5em;
  font-weight: 300;
}

.item-listing-container div h3 {
  margin: 20px 0;
}

.item-listing-container div:first-child h3 {
  margin: 0 0 10px 0;
}

.item-listing-container ul {
  margin: 0;
  padding: 0;
}

.item-listing-container li {
  list-style: none;
  margin: 10px 0;
  padding: 0;
}

.item-listing-container li::before {
  content: "\2714";
}

.map {
  width: 100%;
  height: 350px;
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

  .about-section h2 {
    font-size: 20px;
  }

  .about-detail {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }

  .about-detail p {
    font-size: 14px;
  }

  .item-listing-container h3 {
    font-size: 18px;
  }

  .item-listing-container li {
    font-size: 14px;
  }

  .map {
    height: 200px;
    margin-bottom: 50px;
  }

  .map h2 {
    font-size: 20px;
  }
}
</style>