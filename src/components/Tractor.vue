<template>
    <div class="wrapper" style="align-content: space-between;">
        <v-img :src="require('../assets/images/tractor-terradia.svg')" class="tractor"/>
        <p class="f-size45 font-st green-terradia ml07">L'application qui facilite<br>l'accès aux produits<br>locaux.
        </p>
        <img src="../assets/images/appstore.svg" class="stores">
        <img src="../assets/images/playstore.svg" class="stores">
        <p class="ml1 f-size24 grey-terradia font-st mt1">Parce que nous ne sommes jamais assez<br>proche de notre
            terroire.</p>
        <img src="../assets/images/iphone-app.svg" class="iphone">

        <div class="backg">
            <p class="slog-bas font-st f-size24 color-white">Terradia vous permet de consommer local sans le<br>moindre
                effort.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tractor"
    }
</script>

<style scoped>

    .wrapper {

    }

    .slog-bas {
        right: 0;
        position: absolute;
        margin-top: 7em;
        z-index: 9999;
        margin-right: 2em;
        bottom: 1em;
    }

    .iphone {
        right: 0;
        margin-top: -26em;
        z-index: 1000;
        margin-right: 3em;
        float: right;
        position: absolute;
    }

    .stores {
        margin-left: 2em;
    }

    .mt1 {
        margin-top: 1em;
    }

    .ml1 {
        margin-left: 1.3em;
    }

    .ml07 {
        margin-left: 0.7em;
    }

    .tractor {
        position: absolute;
        height: 250px;
        width: 200px;
        margin-left: 60%;
        margin-top: 7.7%;
        z-index: 1;
    }

    .backg {
        /*background-color: #5CC04A;*/
        /*position: absolute;*/
        /*width: 100%;*/
        /*height: 80%;*/
        /*clip-path: polygon(100% 20%, 100% 100%, 0 100%, 0% 50%);*/
        /*background: linear-gradient(to left, #2BA54C, #5CC04A, #8FDD3D 35%);*/
        position: absolute;
        width: 100%;
        z-index: 0;
        text-align: right;
        height: 80%;
        background: url("../assets/images/background-terradia.svg");
        background-size: cover;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .font-st {
        font-family: Montserrat;
        font-weight: bolder;
    }

    .color-white {
        color: white;
    }

    .green-terradia {
        color: #5CC04A;
    }

    .grey-terradia {
        color: #BBBBBB;
    }

    .f-size24 {
        font-size: 24px;
    }

    .f-size45 {
        font-size: 45px;
    }

</style>