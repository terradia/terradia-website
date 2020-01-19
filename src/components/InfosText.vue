<template>
    <div class="wrapper">
        <p class="title-font">{{title}}</p>
        <div class="flex-cont">
            <div v-if="title == 'Découvrez'">
                <v-img :src="require('../assets/images/planet-terradia.svg')" class="imgsize"/>
            </div>
            <div v-if="title == 'Commandez'">
                <v-img :src="require('../assets/images/loader-terradia.svg')" class="imgsize"/>
            </div>
            <div v-if="title == 'Profitez'">
                <v-img :src="require('../assets/images/like-terradia.svg')" class="imgsize"/>
            </div>
            <p class="text-font">{{text}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InfosText",
        props: {
            title: String,
            text: String,
        }
    }
</script>

<style scoped>

    .title-font {
        margin-left: 6em;
        font-size: 40px;
        font-family: Montserrat;
        font-weight: bold;
        color: #5CC04A;
    }

    .text-font {
        margin-left: 3em;
        font-size: 20px;
        font-family: Montserrat;
        font-weight: normal;
        color: #BBBBBB;
    }

    .imgsize {
        width: 100%;
    }

    .wrapper {
        margin-top: 1em;
        margin-left: 2em;
    }

    .flex-cont {
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
    }
</style>