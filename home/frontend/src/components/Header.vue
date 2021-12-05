<template>
  <header :class="$style.header">
    <div class="row-container width-control">
      <Logo :class="$style.logo" />
      <Button />
    </div>
  </header>
</template>

<script>
import Logo from "./Logo";
import Button from "./SigninButton";

export default {
  name: "Header",
  components: {
    Logo,
    Button,
  },
  props: {},
};
</script>

<style module>
.header {
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  z-index: 2;
}

.logo {
  margin-left: -10px;
}
</style>