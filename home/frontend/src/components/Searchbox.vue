<template>
  <div :class="$style['search-box-container']">
    <font-awesome-icon :class="$style['search-icon']" icon="search"/>
    <input class="roboto" :class="$style['search-box']" placeholder="Type to search" type="text" @keyup="search">
    <!--    <div :class="$style['recommended-searches']">-->
    <!--      <ul>-->
    <!--        <li v-for="(search, i) in this.searches" :key="i">-->
    <!--          {{ search }}-->
    <!--        </li>-->
    <!--      </ul>-->
    <!--    </div>-->
  </div>
</template>

<script>
import {library} from "@fortawesome/fontawesome-svg-core";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

library.add(faSearch);

export default {
  name: 'SearchBox',
  data() {
    return {
      searches: []
    }
  },
  computed: {},
  methods: {
    async search() {
      let searchStr = document.querySelector('#search-box input').value;
      let re = new RegExp(`${searchStr}`, 'gi');

      let data;
      await axios({
        method: 'post',
        url: `${this.$store.state.BASE_URL}`,
        data: {
          query: `query {
                    allCitys {
                      id,
                      name
                    }
                  }`
        },
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(resp => {
        return resp.data;
      }).then(respData => {
        data = respData.data['allCitys'];
      });

      this.searches = [];
      for (let i = 0; i < data.length; ++i) {
        if (re.test(data[i].name)) {
          this.searches.push(data[i].name);
        }
      }
    }
  }
}
</script>

<style module>
.search-box-container {
  display: flex;
  align-items: center;
  height: 50px;
  width: 400px;
  border: 1px solid #aaaaaa;
  background-color: white;
  border-radius: 24px;
  padding: 0 10px;
  margin: auto;

  position: relative;
}

.search-icon {
  font-size: 24px;
  margin: 0 10px;
  z-index: 2;
}

.search-box {
  border: none;
  font-size: 18px;
  z-index: 2;
}

.search-box:focus {
  outline: none;
}

.recommended-searches {
  position: absolute;
  background-color: white;
  top: 21px;
  left: 0;
  right: 0;
  border: 1px solid #aaa;
  border-top: none;
  z-index: 1;
}

.recommended-searches ul {
  margin: 20px 0 0 0;
  padding: 0;
}

.recommended-searches ul li {
  margin-left: 55px;
  list-style: none;
}
</style>