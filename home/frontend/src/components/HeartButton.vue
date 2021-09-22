<template>
  <button>
    <font-awesome-icon :icon="['fas', 'heart']"/>
  </button>
</template>

<script>
import {library} from "@fortawesome/fontawesome-svg-core";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

library.add(faHeart);

export default {
  name: 'HeartButton',
}
</script>

<style scoped>
button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  border: none;
  box-shadow: 0 0 3px 3px #aaaaaa;
  color: #aaaaaa;
  transition: 0.2s;
  cursor: pointer;
}

button:hover {
  color: red;
}
</style>