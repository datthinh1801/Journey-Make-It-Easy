<template>
  <div :class="$style['cursor']">
    <label :class="$style.cursor"
      ><input
        :class="$style.cursor"
        :name="name"
        type="checkbox"
        v-model="v_value"
        @change="refreshFilter"
      />
      {{ value }}</label
    >
  </div>
</template>

<script>
export default {
  name: "FilterOption",
  props: ["title", "name", "value"],
  data() {
    return {
      v_value: false,
    };
  },
  methods: {
    refreshFilter() {
      if (this.v_value) {
        this.$store.commit("setFilter", { key: this.name, value: this.value });
      } else {
        this.$store.commit("removeFilter", {
          key: this.name,
          value: this.value,
        });
      }
    },
  },
};
</script>

<style module>
.cursor {
  cursor: pointer;
}
</style>