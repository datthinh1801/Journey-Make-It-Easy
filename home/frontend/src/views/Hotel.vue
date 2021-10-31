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
        <rating-section :starCount="ratingScore" :numberVoting="numberVoting" />
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
      </div>
      <image-slider :images="images" />
      <div :class="$style['about-section']">
        <h2>About</h2>
        <hr>
        <div :class="$style['about-detail']">
          <div>
            <rating-section :starCount="ratingScore" :numberVoting="numberVoting" />
            <hr>
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
                  {{roomFeature}}
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
    </div>
  </div>
</template>

<script>
import HeaderAndNav from '../components/HeaderAndNav.vue';
import BigHeart from '../components/BigHeart.vue';
import ShareButton from '../components/ShareButton.vue';
import ImageSlider from '../components/ImageSlider.vue';
import RatingSection from '../components/RatingSection.vue';

export default {
  name: 'Hotel',
  components: {
    HeaderAndNav,
    BigHeart,
    ShareButton,
    ImageSlider,
    RatingSection
  },
  computed: {
    name() {
      return this.$store.state.item.name;
    },
    ratingScore(){
      return this.$store.state.item['ratingScore'];
    },
    numberVoting() {
      return this.$store.state.item['numberVoting'];
    },
    images() {
      let imgObjs = this.$store.state.item['images'];
      let imgs = [];
      imgObjs.forEach(imgObj => {
        imgs.push(imgObj['link']);
      });
      return imgs;
    },
    address() {
      return this.$store.state.item['address'];
    },
    phoneNumber() {
      return this.$store.state.item['phone'];
    },
    website() {
      return this.$store.state.item['email'];
    },
    about() {
      return this.$store.state.item['about'];
    },
    roomFeatures() {
      return this.$store.state.item['roomFeatures'].split(', ');
    },
    roomTypes() {
      return this.$store.state.item['roomTypes'].split(', ');
    },
    amenities() {
      return this.$store.state.item['propertyAmenities'].split(', ');
    }
  },
  beforeMount(){
    this.$store.dispatch('getHotelDetail', this.$store.state.currentItemName);
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


.about-section {
  width: 80%;
}

.about-section hr {
  width: 100%;
  max-width: 100%;
}

.about-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.about-detail p {
  line-height: 1.5em;
  }

.item-listing-container div h3 {
  margin: 20px 0;
}

.item-listing-container div:first-child h3 {
  margin: 0 0 10px 0;
}

.item-listing-container ul{
  margin: 0;
  padding: 0;
}

.item-listing-container li{
  list-style: none;
  margin: 10px 0;
  padding: 0;
}
.item-listing-container li::before{
  content: '\2714';
}
</style>