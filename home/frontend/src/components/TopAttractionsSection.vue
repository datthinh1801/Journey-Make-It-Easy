<template>
  <div class="width-control">
    <h1>Top Attractions in {{ place }}</h1>
    <div :class="$style['content-container']">

    </div>
  </div>
</template>

<script>
export default {
  name: 'TopAttractionsSection',
  props: ['place'],
}
</script>

<style module>
h1 {
  text-align: center;
}

.content-container {

}
</style>