<template>
  <div>
    <button class="roboto">Sign in</button>
  </div>
</template>

<script>
export default {
  name: 'SigninButton'
}
</script>

<style scoped>
@import '../styles/global.css';

button {
  width: 100px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  background-color: #F9C100;
  border: none;
  transition: 0.3s;
  margin-right: 10px;
}

button:hover {
  background-color: #FDD039;
  border-color: #FDD039;
}
</style>