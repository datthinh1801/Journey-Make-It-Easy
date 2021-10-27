<template>
  <button class="roboto" :class="$style.btn">
    <font-awesome-icon :class="$style['heart-icon']" :icon="['fas','heart']"/>
    <span>Saved</span>
  </button>
</template>

<script>
import {library} from "@fortawesome/fontawesome-svg-core";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

library.add(faHeart);

export default {
  name: 'BigHeart',
}
</script>

<style module>
.btn {
  display: flex;
  align-items: center;

  border: none;
  background-color: transparent;
  color: #aaa;

  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;

  cursor: pointer;
  transition: 0;
}

.btn:hover {
  background-color: white;
}

.heart-icon {
  color: #aaa;
  margin-right: 5px;
  font-size: 20px;
}

.btn:hover .heart-icon {
  color: red;
}

.btn:hover span {
  text-decoration: underline;
  color: black;
}
</style>