<template>
  <div>
    <font-awesome-icon id="search-icon" icon="search"/>
    <input class="roboto" placeholder="Type to search" type="text">
  </div>
</template>

<script>
import {library} from "@fortawesome/fontawesome-svg-core";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

export default {
  name: 'SearchBox',
}
</script>

<style scoped>
@import '../styles/global.css';

div {
  display: flex;
  align-items: center;
  height: 50px;
  width: 400px;
  border: 1px solid #aaaaaa;
  background-color: white;
  border-radius: 24px;
  padding: 0 10px;
  margin: auto;
}

#search-icon {
  font-size: 24px;
  margin: 0 10px;
}

input {
  border: none;
  font-size: 18px;
}

input:focus {
  outline: none;
}
</style>