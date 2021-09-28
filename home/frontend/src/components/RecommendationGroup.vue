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
      <VerticalItem v-for="(item, i) in items" :key="i" :class="$style.recommendedItem" :imgSrc="item.imgSrc"
                    :itemName="item.itemName"/>
      <button :class="$style.rightButton">
        <font-awesome-icon icon="chevron-right"/>
      </button>
    </div>
  </div>
</template>

<script>
import {library} from "@fortawesome/fontawesome-svg-core";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

library.add(faChevronLeft, faChevronRight);

import VerticalItem from "./VerticalItem";

export default {
  name: 'RecommendationGroup',
  components: {VerticalItem,},
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
  max-width: 95%;
  max-height: 95%;
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
  background-color: white;
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  height: 33px;
  width: 33px;
  top: 33%;

  border-radius: 100%;
  border: 2px solid black;

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
  right: 0;
}

</style>