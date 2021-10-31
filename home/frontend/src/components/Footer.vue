<template>
    <div :class="$style['footer-container']">
        <hr>
        <div class="width-control" :class="$style.footer">
            <div class="logo no-select" :class="$style['logo-footer']">Journey: Make it easy</div>
            <span>{{ thisYear }} &copy; All rights reserved</span>
            <div :class="$style['sns']">
                <span>Powered by</span>
                <font-awesome-icon :icon="['fab', 'python']" />
                <font-awesome-icon :icon="['fab', 'vuejs']" />
            </div>
        </div>
    </div>
</template>

<style module>
.footer-container {
    padding: 10px 0;
}

.footer-container hr {
    max-width: 100%;
    width: 100%;
}

.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo-footer {
  font-family: 'Pacifico', cursive;
  font-size: 22px;
    color: #f9c100;
}

.sns {
    font-size: 24px;
    display: flex;
    align-items: center;
    color: #888;
}

.sns span {
    font-size: 16px;
    margin-right: 5px;
}
</style>

<script>
import {library} from "@fortawesome/fontawesome-svg-core";
import {
    faPython,
    faVuejs,
    } from "@fortawesome/free-brands-svg-icons";

library.add(faPython, faVuejs);


export default {
    name: 'Footer',
    components: {
    },
    data() {
        return {
        }
    },
    computed: {
        thisYear() {
            return new Date().getFullYear();
        }
    },
    methods: {
    }
}
</script>