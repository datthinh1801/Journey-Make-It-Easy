<template>
  <div :class="[$style.item]">
    <div :class="[$style.image]">
      <img
        alt=""
        :src="imgUrl"
        :style="{ width: imgWidth, height: imgHeight }"
      />
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VerticalItem",
  components: {},
  props: ["imgSrc", "imgWidth", "imgHeight"],
  data() {
    return {};
  },
  computed: {
    imgUrl() {
      let newUrl = this.imgSrc
        .replace("https://media-cdn", "https://dynamic-media-cdn")
        .replace(
          /\.jpg[\w\W]*/,
          `.jpg?w=${this.imgRenderWidth}&h=${this.imgRenderHeight}&s=1`
        );
      return newUrl;
    },
    imgRenderWidth() {
      if (parseInt(this.imgWidth) <= 300) {
        return "300";
      } else if (parseInt(this.imgWidth) <= 400) {
        return "400";
      } else {
        return "1000";
      }
    },
    imgRenderHeight() {
      if (parseInt(this.imgHeight) <= 300) {
        return "300";
      } else if (parseInt(this.imgHeight) <= 400) {
        return "400";
      } else {
        return "1000";
      }
    },
  },
  methods: {
    resizeImage() {
      const images = document.querySelectorAll(`.${this.$style.image} img`);
      if (screen.width < 500) {
        for (let i = 0; i < images.length; ++i) {
          images[i].style.width = "100%";
          images[i].style.height = "auto";
        }
      } else {
        for (let i = 0; i < images.length; ++i) {
          images[i].style.width = this.imgWidth;
          images[i].style.height = this.imgHeight;
        }
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.resizeImage);
    this.resizeImage();
  },
};
</script>

<style module>
.item {
  cursor: pointer;
  transition: 0.3s;
}

.item:hover {
  opacity: 0.8;
}

.image {
  position: relative;
}

.image img {
  object-fit: cover;
}

.image img:empty {
  background-image: linear-gradient(#eee 8%, #dadada 18%, #eee 33%);
  animation: skeletonLoading 1.2s linear infinite;
  animation-fill-mode: backwards;
  animation-delay: 0.2s;
  background-size: 200% 200%;
}

@keyframes skeletonLoading {
  0% {
    background-position: 50% 0%;
  }

  100% {
    background-position: 0% -200%;
  }
}
</style>