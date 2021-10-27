<template>
  <button class="roboto" :class="$style.btn">
    <font-awesome-icon :class="$style['share-icon']" :icon="['fas','external-link-alt']"/>
    <span>Share</span>
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

<style module>
.btn {
  background-color: transparent;
  border: none;

  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: 300;
  text-transform: capitalize;

  cursor: pointer;
}

.share-icon {
  color: #aaa;
  font-size: 20px;
  margin-right: 5px;
  margin-left: 20px;
}

.btn:hover .share-icon {
  color: black;
}

.btn:hover span {
  text-decoration: underline;
  font-weight: 400;
}
</style>