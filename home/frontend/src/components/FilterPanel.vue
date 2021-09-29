<template>
  <div :class="$style['col-container']">
    <FilterOptionSection/>
    <FilterOptionSection/>
    <FilterOptionSection/>
    <!--Hide the last hr.-->
  </div>
</template>

<script>
import FilterOptionSection from "./FilterOptionSection";

export default {
  name: 'FilterPanel',
  components: {FilterOptionSection},
}
</script>

<style module>
div.col-container {
  width: 200px;
  border: 1px solid black;
  border-radius: 14px;
  padding: 10px 10px;
}

</style>
