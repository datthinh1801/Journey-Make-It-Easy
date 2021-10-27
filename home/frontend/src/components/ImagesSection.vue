<template>
  <div :class="['row-container', 'width-control', $style.gridContainer]">
    <div :class="$style.gridItemMain"></div>
    <div :class="$style.gridItemSub"></div>
    <div :class="$style.gridItemSub"></div>
  </div>
</template>

<script>
export default {
  name: 'ImagesSection',
}
</script>

<style module>
.gridContainer {
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: repeat(2, 200px);
}

.gridItemMain {
  background-image: url("../../public/images/linh-phuoc-pagoda.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  grid-row: 1/3;
}

.gridItemSub {
  background-image: url("../../public/images/linh-phuoc-pagoda.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>