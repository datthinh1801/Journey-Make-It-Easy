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
        <RatingSection star-count="4.5" />
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
      <div :class="$style['overview-container']">
        <div :class="$style['overview-text']">
          <h2>About</h2>
          <p>{{ about }}</p>
        </div>
        <vue-flux 
          :options="vfOptions"
          :images="this.images" 
          :transitions="vfTransitions"
          ref="slider"
          :class="$style['overview-image']">

          <template v-slot:preloader>
            <flux-preloader />
          </template>

          <template v-slot:controls>
            <flux-controls />
          </template>

          <template v-slot:pagination>
            <flux-pagination />
          </template>

          <template v-slot:index>
            <flux-index />
          </template>
        </vue-flux>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAndNav from "../components/HeaderAndNav";
import BigHeart from "../components/BigHeart";
import ShareButton from "../components/ShareButton";
import RatingSection from "../components/RatingSection";
import {
  VueFlux,
  FluxControls,
  FluxIndex,
  FluxPagination,
  FluxPreloader,
} from 'vue-flux';

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
    VueFlux,
    FluxControls,
    FluxIndex,
    FluxPagination,
    FluxPreloader,
  },
  data() {
    return {
      vfOptions: {
        autoplay: true,
      },
      vfTransitions: ['slide'],
    }
  },
  computed: {
    item() {
      return this.$store.state.item;
    },
    name() {
      return this.item['name'];
    },
    about() {
      return this.item['about'] || '';
    },
    address() {
      return this.item['address'] || '';
    },
    admissionTicket() {
      return this.item['admissionTicket'] || '';
    },
    phoneNumber() {
      return this.item['phone'] || '';
    },
    openTime() {
      return this.item['openTime'] || '';
    },
    suggestedDuration() {
      return this.item['suggestedDuration'] || '';
    },
    ratingScore() {
      return this.item['ratingScore'] || '';
    },
    numberVoting() {
      return this.item['numberVoting'] || '';
    },
    images() {
      let imgObjs = this.item['images'] || [];
      let imgs = [];
      imgObjs.forEach(imgObj => {
        imgs.push(imgObj['link']);
      });
      return imgs;
    },
    website() {
      return this.item['website'] || '';
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

.info-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.info-container span {
  margin-left: 5px;
}

.overview-container {
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 20px;
}

.overview-text {
  text-align: justify;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
}

.overview-image {
  width: 100%;
  height: 350px;
  border: 1px solid #ccc;
}
</style>