<template>
    <div class="width-control">
        <p class="roboto title">Popular Destinations</p>
        <div :class="$style['item-list-container']">
            <vertical-item v-for="(item, i) in items" :key="i" imgSrc="images/placeholder_img.png" imgWidth="100%"
                imgHeight="200px" @click.native="redirectToItem(item)" :class="$style['v-item']">
                <div :class="$style['v-item-detail']">
                    <h4>{{ item.name }}</h4>
                    <div>🇻🇳 {{item.nation.name}}</div>
                </div>
            </vertical-item>
            <button :class="$style.leftButton" @click="moveLeft" v-show="showPrev">
                <font-awesome-icon icon="chevron-left" />
            </button>
            <button :class="$style.rightButton" @click="moveRight()" v-show="showNext">
                <font-awesome-icon icon="chevron-right" />
            </button>
        </div>
    </div>
</template>

<style module>
.item-list-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    width: 100%;
    position: relative;
}

.item-list-container h4 {
    margin: 0;
}

.v-item:hover .v-item-detail h4 {
    text-decoration: underline;
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
  z-index: 0;
  cursor: pointer;
}

.leftButton {
  padding-right: 6px;
  left: -15px;
}

.rightButton {
  padding-left: 6px;
  right: -15px;
}

.leftButton:hover,
.rightButton:hover {
  background-color: black;
  color: white;
  border-color: black;
}
</style>

<script>
import VerticalItem from './VerticalItem.vue'
export default {
    components: {
        VerticalItem
    },
    name: 'FeaturedDestinationSection',
    data() {
        return {
            this_item: 0,
            showed_items: 4,
        }
    },
    computed: {
        items() {
            return this.$store.state.cities.slice(this.this_item, this.this_item + this.showed_items);
        },
        showPrev() {
            return this.this_item > 0;
        },
        showNext() {
            return this.$store.state.cities.length > this.this_item + this.showed_items;
        }
    },
    methods: {
        moveLeft() {
            this.this_item = Math.max(this.this_item - 1, 0);
        },
        moveRight() {
            ++this.this_item;
        },
        redirectToItem(item) {
            this.$store.commit('changeCity', item.name);
            this.$router.push('/explore');
        },
        nation(item) {
            if (item.nation.name === 'Vietnam') {
                return '🇻🇳 ' + item.nation.name;
            }
            else {
                return item.nation.name;
            }
        }
    },
    beforeMount() {
        this.$store.dispatch('getAllCities');
    }
}
</script>