<template>
  <button class="roboto" :class="$style.btn" @click="share">
    <font-awesome-icon
      :class="$style['share-icon']"
      :icon="['fas', 'external-link-alt']"
    />
    <span>Share</span>
  </button>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faExternalLinkAlt);

export default {
  name: "ShareButton",
  methods: {
    share() {
      let url = window.location.href;
      navigator.clipboard.writeText(url);
      //   document
      //     .querySelector(`.${this.$style.btn}`)
      //     .setAttribute("title", "Copied!");
    },
  },
};
</script>

<style module>
.btn {
  background-color: transparent;
  border: none;

  display: flex;
  align-items: center;
  margin: auto;

  font-size: 16px;
  font-weight: 500;
  color: #aaa;
  text-transform: capitalize;

  cursor: pointer;
}

.btn:hover {
  background-color: white;
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
  color: black;
}

.btn:active:after {
  content: "Copied!";
  position: relative;
  top: -20px;
  left: -40px;
  font-weight: 300;
}
</style>