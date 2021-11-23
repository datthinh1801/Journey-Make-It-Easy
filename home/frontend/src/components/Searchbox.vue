<template>
  <div :class="$style['search-box-container']" :style="{ 'z-index': zIndex }">
    <div :class="$style['box-container']">
      <label for="search-box">
        <font-awesome-icon :class="$style['search-icon']" icon="search"
      /></label>
      <input
        id="searchBox-box"
        class="roboto"
        :class="$style['search-box']"
        placeholder="Type to search"
        type="text"
        @keyup="search"
      />
    </div>
    <ul v-show="shouldExtended" :class="$style['search-result-container']">
      <li v-for="search in searches" :key="search.id" @click="goTo(search)">
        {{ search["name"] }}
      </li>
    </ul>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

library.add(faSearch);

export default {
  name: "SearchBox",
  data() {
    return {
      searches: [],
      allSearches: [],
    };
  },
  computed: {
    zIndex() {
      if (this.$store.state.modalUp) {
        return 0;
      }
      return 1;
    },
    shouldExtended() {
      return this.searches.length > 0;
    },
  },
  methods: {
    goTo(item) {
      this.$store.commit("changeCity", {
        city_id: item["id"],
        city_name: item["name"],
      });
      this.$router.push("/explore");
    },
    async search() {
      let searchStr = document.querySelector("#searchBox-box").value;
      let re = new RegExp(`^${searchStr}`, "gi");
      let data;

      if (this.allSearches.length === 0) {
        await axios({
          method: "post",
          url: `${this.$store.state.BASE_URL}/graphql`,
          data: {
            query: `query {
                    allCities {
                      id,
                      name
                    }
                  }`,
          },
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((resp) => {
            return resp.data;
          })
          .then((respData) => {
            data = respData.data["allCities"];
          });

        this.allSearches = data;
      }

      this.searches = [];
      for (let i = 0; i < this.allSearches.length; ++i) {
        if (re.test(this.allSearches[i]["name"])) {
          this.searches.push(this.allSearches[i]);
        }
      }
    },
  },
};
</script>

<style module>
.search-box-container {
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