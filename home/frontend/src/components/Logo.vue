<template>
  <div class="logo no-select" @click="home">Journey: Make it easy</div>
</template>

<script>
export default {
  name: "Logo",
  methods: {
    home() {
      this.$router.push("/").catch((err) => err);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
@import "../styles/global.css";

.logo {
  font-family: "Pacifico", cursive;
  color: #f9c100;
  font-size: 22px;
  cursor: pointer;
}

@media only screen and (max-width: 800px) {
  .logo {
    font-family: "Pacifico", cursive;
    color: #f9c100;
    font-size: 15px;
    cursor: pointer;
    padding-left: 10px;
  }
}
</style>