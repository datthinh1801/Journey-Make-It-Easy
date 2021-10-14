<template>
  <div>
    <h1 :class="$style.header">Top Attractions in {{ place }}</h1>
    <div :class="$style['content-container']" class="width-control">
      <VerticalItem v-for="(item, i) in items" :key="i"
                    :class="$style['grid-item']"
                    :imgSrc="item.images[4]"
                    :itemName="item.name"/>
    </div>
    <button :class="$style['load-more-btn']" @click="loadMore">LOAD MORE</button>
  </div>
</template>

<script>
import VerticalItem from "./VerticalItem";

export default {
  name: 'TopAttractionsSection',
  components: {VerticalItem},
  computed: {
    place() {
      // return this.$store.state.place.upper();
      return 'Da Lat';
    },
    items() {
      return this.$store.state.attractionArr;
    }
  },
  methods: {
    getAttraction(n) {
      for (let i = 0; i < n; ++i) {
        this.$store.dispatch('getAttraction');
      }
    },
    loadMore() {
      this.getAttraction(9);
    }
  },
  beforeMount() {
    this.getAttraction(9);
  },
  beforeDestroy() {
    this.$store.commit('clearAllAttractions');
  }
}
</script>

<style module>
h1.header {
  text-align: center;
}

.content-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-left: auto;
  margin-right: auto;
}

.grid-item {
  width: 100%;
  height: 100%;
}

button.load-more-btn {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 150px;
  height: 60px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: white;
  border: 3px solid black;
  font-size: 18px;
  font-weight: 500;
  transition: 0.3s;
}

button.load-more-btn:hover {
  background-color: black;
  color: white;
}
</style>