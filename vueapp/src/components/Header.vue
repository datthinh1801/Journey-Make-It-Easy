<template>
  <header>
    <div class="row-container">
      <Logo/>
      <Button/>
    </div>
  </header>
</template>

<script>
import Logo from './Logo'
import Button from './SigninButton'

export default {
  name: 'Header',
  components: {
    Logo,
    Button
  },
  props: {}
}
</script>

<style scoped>
@import '../styles/global.css';

header {
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  z-index: 1;
}

</style>