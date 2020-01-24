<template>
    <div class="wrapper">
        <v-img :src="require('../assets/images/newsletter-terradia.svg')"/>
    </div>
</template>

<script>
    export default {
        name: "Newsletter"
    }
</script>

<style scoped>
    .imgs {
        width: 100px;
        height: 150px;
    }

    .wrapper {
        display: flex;
        flex-direction: row;
    }
</style>