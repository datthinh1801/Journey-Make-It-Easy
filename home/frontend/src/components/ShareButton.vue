<template>
  <button class="roboto">
    <font-awesome-icon id="share-icon" :icon="['fas','external-link-alt']"/>
    Share
  </button>
</template>

<script>
import {library} from "@fortawesome/fontawesome-svg-core";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";

library.add(faExternalLinkAlt);

export default {
  name: 'ShareButton',
}
</script>

<style scoped>
button {
  background-color: transparent;
  border: none;

  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: 300;
  text-transform: capitalize;

  cursor: pointer;
}

#share-icon {
  color: #aaa;
  font-size: 20px;
  margin-right: 5px;
  margin-left: 20px;
}

button:hover #share-icon {
  color: black;
}

button:hover {
  text-decoration: underline;
  font-weight: 400;
}
</style>