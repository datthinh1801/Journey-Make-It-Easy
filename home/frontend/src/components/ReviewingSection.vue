<template>
  <div :class="$style['review-section-container']">
    <div :class="$style['stars-section']" v-if="hasReviews">
      <h2>{{ ratingScore }}</h2>
      <Stars :starCount="ratingScore" :hideScore="true" />
      <i>{{ numberVoting }} reviews</i>
    </div>
    <div v-else :class="[$style['stars-section'], $style['else']]">
      No rating yet.
    </div>
    <div :class="$style['review-section']">
      <h2>Reviews</h2>
      <hr />
      <div>
        <h3>My review</h3>
        <div :class="$style['star-container']">
          <label for="my-stars" :class="$style['star-label']">Stars:</label>
          <select
            id="my-stars"
            v-model="myStars"
            :class="$style['star-select']"
          >
            <option value="5">5 &starf;&starf;&starf;&starf;&starf;</option>
            <option value="4">4 &starf;&starf;&starf;&starf;</option>
            <option value="3">3 &starf;&starf;&starf;</option>
            <option value="2">2 &starf;&starf;</option>
            <option value="1">1 &starf;</option>
          </select>
        </div>
        <textarea
          :class="$style['review-text-section']"
          wrap="soft"
          maxlength="300"
          v-model="reviewContent"
        ></textarea>
        <button :class="$style['send-review-btn']" @click="sendReview">
          Send
        </button>
      </div>
      <div v-if="hasReviews" :class="$style['other-reviews']">
        <h3>Others</h3>
        <ReviewItem
          v-for="review in reviews"
          :key="review.id"
          :username="review.user.username"
          :point="review.point"
          :text="review.text"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Stars from "./Stars.vue";
import ReviewItem from "./ReviewItem.vue";

export default {
  name: "ReviewingSection",
  props: ["numberVoting", "ratingScore"],
  components: {
    Stars,
    ReviewItem,
  },
  data() {
    return {
      reviewContent: "",
      myStars: 0,
    };
  },
  computed: {
    hasReviews() {
      return this.numberVoting > 0;
    },
    reviews() {
      return this.$store.state.reviews;
    },
  },
  methods: {
    sendReview() {
      if (this.reviewContent.length > 0 && this.myStars > 0) {
        this.$store.dispatch("submitReview", {
          type: "Attraction",
          point: this.myStars,
          text: this.reviewContent,
          id: this.$store.state.item.id,
        });
        this.reviewContent = "";
        this.myStars = 0;
      }
    },
  },
};
</script>

<style module>
.review-section-container {
  width: 100%;
  margin-top: 50px;
  padding: 20px 10px;
  display: flex;
  align-items: flex-start;
}

.stars-section {
  display: flex;
  align-items: center;
  width: 40%;
}

.stars-section h2 {
  margin: 0 10px 0 0;
}

.review-section {
  width: 100%;
}

.review-section h2 {
  margin: 0 0 20px 0;
}

.else {
  color: #aaa;
  font-style: italic;
}

.review-text-section {
  width: 100%;
  height: 200px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  resize: none;
}

.review-text-section:focus {
  outline: 2px solid rgb(112, 112, 112);
}

.send-review-btn {
  background: white;
  color: black;
  border: 2px solid black;
  border-radius: 5px;
  margin-top: 10px;
}

.send-review-btn:hover {
  background: black;
  color: white;
  border: 2px solid black;
}

.star-container {
  margin-bottom: 5px;
}
.star-label {
  margin-right: 10px;
}

.star-select {
  height: 30px;
  cursor: pointer;
}

.star-select option {
  cursor: pointer;
}
</style>