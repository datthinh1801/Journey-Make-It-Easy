<template>
  <div>
    <HeaderAndNav/>
    <div class="width-control">
      <div class="row-container">
        <h1>{{ attractionName }}</h1>
        <div class="row-container">
          <BigHeart/>
          <ShareButton/>
        </div>
      </div>
      <RatingSection star-count="4.5"/>
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
            <font-awesome-icon icon="window-maximize"/>
            <span>Website</span>
          </a>
        </div>
      </div>
      <div class="roboto open-time-container">
        <font-awesome-icon icon="clock"/>
        <span>Open Time: {{ openTime }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAndNav from "../components/HeaderAndNav";
import BigHeart from "../components/BigHeart";
import ShareButton from "../components/ShareButton";
import RatingSection from "../components/RatingSection";

export default {
  name: 'Attraction',
  components: {RatingSection, ShareButton, BigHeart, HeaderAndNav},
  data() {
    return {
      attractionName: 'Ba Ho Waterfall',
      openTime: '07:00 AM',
      address: '123 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis',
      phone: '0123456789'
    }
  },
  computed: {}
}

</script>

<style module>
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
</style>