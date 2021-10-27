<template>
  <div>
    <label><input :name="title" type="checkbox"> {{ value }}</label>
  </div>
</template>

<script>
export default {
  name: 'FilterOption',
  props: ['title', 'value']
}
</script>

<style module>

</style>