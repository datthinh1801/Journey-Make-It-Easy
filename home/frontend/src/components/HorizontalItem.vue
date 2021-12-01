<template>
  <div
    :class="$style['item-container']"
    :style="{ height: itemRenderHeight, width: itemRenderWidth }"
  >
    <div :class="$style['img-container']">
      <img
        :class="$style['item-img']"
        alt=""
        :src="imgUrl"
        :style="{ height: imgHeight, width: imgWidth }"
      />
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "HorizontalItem",
  props: ["imgSrc", "imgHeight", "imgWidth", "itemHeight", "itemWidth"],
  data() {
    return {
      itemRenderHeight: "auto",
      itemRenderWidth: "auto",
    };
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
      }
      return parseInt(this.imgWidth);
    },
    imgRenderHeight() {
      if (parseInt(this.imgHeight) <= 300) {
        return "300";
      }
      return parseInt(this.imgHeight);
    },
    // itemRenderHeight() {
    //   if (screen.width < 500) {
    //     return "auto";
    //   } else {
    //     return this.itemHeight;
    //   }
    // },
    // itemRenderWidth() {
    //   if (screen.width < 500) {
    //     return "auto";
    //   } else {
    //     return this.itemWidth;
    //   }
    // },
  },
  methods: {
    resize_mobile() {
      if (screen.width < 500) {
        this.itemRenderHeight = "auto";
        this.itemRenderWidth = "auto";
        this.imgHeight = "200px";
        this.imgWidth = "100%";
      } else {
        this.itemRenderHeight = this.itemHeight;
        this.itemRenderWidth = this.itemWidth;
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.resize_mobile);
    this.resize_mobile();
  },
};
</script>

<style module>
.item-container {
  display: flex;
  border: 1px solid #777;
  border-radius: 4px;
  margin-bottom: 20px;
  cursor: pointer;
}

.item-container:hover .img-container {
  opacity: 0.8;
}

.item-container:hover h3 {
  text-decoration: underline;
}

.img-container {
  position: relative;
}

.item-img:empty {
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

@media only screen and (max-width: 500px) {
  .item-container {
    flex-direction: column;
  }
}
</style>