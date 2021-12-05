<template>
  <button :class="$style['load-more-btn']" @click="$emit('loadMore')">
    LOAD MORE
  </button>
</template>

<script>
export default {
  name: "LoadMoreButton",
};
</script>

<style module>
button.load-more-btn {
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 60px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: white;

  border: 3px solid black;
  border-radius: 14px;

  font-size: 18px;
  font-weight: 500;
  color: black;
  transition: 0.2s;
}

button.load-more-btn:hover {
  background-color: black;
  color: white;
}

@media only screen and (max-width: 500px) {
  button.load-more-btn {
    width: 40%;
    height: 40px;
    font-size: 14px;
    margin: 20px auto;
  }
}
</style>