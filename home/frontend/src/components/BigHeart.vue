<template>
  <button class="roboto">
    <font-awesome-icon id="heart-icon" :icon="['fas','heart']"/>
    Saved
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

<style scoped>
button {
  display: flex;
  align-items: center;

  border: none;
  background-color: transparent;

  font-size: 16px;
  font-weight: 300;
  text-transform: capitalize;

  cursor: pointer;
}

#heart-icon {
  color: #aaa;
  margin-right: 5px;
  font-size: 20px;
}

button:hover #heart-icon {
  color: red;
}

button:hover {
  text-decoration: underline;
  font-weight: 400;
}
</style>