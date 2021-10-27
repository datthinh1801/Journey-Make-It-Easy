<template>
  <div :class="$style['search-box-container']">
  <div :class="$style['box-container']">
    <label for="search-box">
      <font-awesome-icon :class="$style['search-icon']" icon="search" /></label>
    <input id="searchBox-box" class="roboto" :class="$style['search-box']" placeholder="Type to search" type="text"
      @keyup="search">
  </div>
    <ul v-if="this.shouldExtended" :class="$style['search-result-container']">
      <li v-for="(item, i) in searches" :key=i
          @click="goTo(item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import {
  library
} from "@fortawesome/fontawesome-svg-core";
import {
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

library.add(faSearch);

export default {
  name: 'SearchBox',
  data() {
    return {
      searches: [],
      shouldExtended: false,
    }
  },
  computed: {
  },
  methods: {
    goTo(item) {
      this.$store.state.city = item;
      this.$router.push('/explore');
    },
    async search() {
      let searchStr = document.querySelector('#searchBox-box').value;
      if (searchStr.length > 0){
        this.shouldExtended = true;
      } else {
        this.shouldExtended = false;
      }
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
  /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto; */
  height: fit-content;
  width: 400px;
  border: 1px solid #aaaaaa;
  background-color: white;
  border-radius: 24px;
  padding: 10px 10px;
  margin: auto;
}

.box-container {
  display: flex;
  align-items: center;
}

.search-result-container {
  display: flex;
  flex-direction: column;
}

.search-result-container ul {
  margin: 0;
  padding: 0;
}

.search-result-container li {
  list-style: none;
  padding: 10px 0;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  margin-left: 7px;
}

.search-result-container li:hover {
  text-decoration: underline;
}

.search-icon {
  font-size: 24px;
  margin: 0 10px;
}

.search-box {
  border: none;
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  height: 90%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
}

.search-box:focus {
  outline: none;
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