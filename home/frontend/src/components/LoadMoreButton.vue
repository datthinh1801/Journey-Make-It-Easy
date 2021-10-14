<template>
  <button :class="$style['load-more-btn']" @click="$emit('loadMore')">LOAD MORE</button>
</template>

<script>
export default {
  name: 'LoadMoreButton',
}
</script>

<style module>
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