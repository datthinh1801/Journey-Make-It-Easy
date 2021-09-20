<template>
  <div>
    <button>Sign in</button>
  </div>
</template>

<script>
export default {
  name: 'SigninButton'
}
</script>

<style scoped>
button {
  width: 100px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: white;
  background-color: #F9C100;
  border: 3px solid #F9C100;
  transition: 0.3s;
}

button:hover {
  background-color: #FDD039;
  border-color: #FDD039;
}
</style>