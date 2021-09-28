<template>
  <div :class="$style.gridContainer">
    <div :class="$style.info">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <div :class="$style.itemContainer">
      <button :class="$style.leftButton">
        <font-awesome-icon icon="chevron-left"/>
      </button>
      <RecommendationItem v-for="(item, i) in items" :key="i" :class="$style.recommendedItem" :imgSrc="item.imgSrc"
                          :itemName="item.itemName"/>
      <button :class="$style.rightButton">
        <font-awesome-icon icon="chevron-right"/>
      </button>
    </div>
  </div>
</template>

<script>
import RecommendationItem from "./RecommendationItem";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

library.add(faChevronLeft, faChevronRight);

export default {
  name: 'RecommendationGroup',
  components: {RecommendationItem},
  props: ['title', 'description'],
  data() {
    return {
      items: [
        {
          itemName: "Item 1",
          imgSrc: "images/placeholder_img.png"
        },
        {
          itemName: "Item 2",
          imgSrc: "images/placeholder_img.png"
        },
        {
          itemName: "Item 3",
          imgSrc: "images/placeholder_img.png"
        }
      ]
    }
  }
}
</script>

<style module>
@import "../styles/global.css";

.gridContainer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
}

.recommendedItem {
  cursor: pointer;
}

.itemContainer {
  position: relative;
  grid-column: 2/5;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-left: 20px;
  padding-right: 10px;
}

.leftButton,
.rightButton {
  display: flex;
  height: 30px;
  width: 30px;
  background-color: white;
  border-radius: 100%;
  border: 2px solid black;
  color: black;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 80px;
  font-size: 22px;
  transition: 0.2s;
  z-index: 1;
  cursor: pointer;
}

.leftButton:hover,
.rightButton:hover {
  background-color: black;
  color: white;
}

.rightButton {
  right: 25px;
}

</style>