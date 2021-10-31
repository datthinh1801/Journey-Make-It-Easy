<template>
   <div :class="$style['footer-container']">
       <div class="width-control" :class="$style.footer">
            <div class="logo no-select" :class="$style['logo-footer']">Journey: Make it easy</div>
       </div>
   </div> 
</template>

<style module>
.footer-container {
    width: 100%;
    background-color: #fff4ce;
    padding: 10px 0;
}

.footer {
    color: black;
}

.logo-footer {
  font-family: 'Pacifico', cursive;
  font-size: 22px;
}
</style>

<script>
export default {
    name: 'Footer',
    components: {
    },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>