<template>
    <div class="main-wrapper">
        <p class="slogan">Découvrez, commandez et<br>consommez local.</p>
    <div class="wrapper-infos">
        <div class="card">
            <p class="title-font">Découvrez</p>
            <v-img :src="require('../assets/images/loupe-terradia.svg')" class="imgsize"/>
            <p class="text-font rot">Terradia vous permet de découvrir les producteurs locaux qui se trouvent juste à côté de chez vous!</p>
        </div>
        <div class="card">
            <p class="title-font">Commandez</p>
            <v-img :src="require('../assets/images/commande-terradia.svg')" class="imgsize"/>
            <p class="text-font rot">Terradia vous permet de commander les produits locaux de votre choix en quelques clics!</p>
        </div>
        <div class="card">
            <p class="title-font">Consommez</p>
            <v-img :src="require('../assets/images/consomme-terradia.svg')" class="imgsize"/>
            <p class="text-font rot">Avec la livraison Terradia dans les heures qui suivent votre commande, vous consommez des produits ultra frais!</p>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "InfosText",
    }
</script>

<style scoped>

    .slogan {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bolder;
        font-size: 40px;
        color: white;
        margin-left: 1em;
    }

    .main-wrapper {
        padding-top: 1em;
        padding-bottom: 5em;
        /*border: blue 2px solid;*/
        background: linear-gradient(0.25turn, #8FDD3D, #5CC04A);
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    .card {
        display: flex;
        padding: 2em;
        align-items: center;
        flex-direction: column;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
        width: 50vh;
        transition: all .8s ease-in-out;
    }

    .card:hover {
        transform: rotate(-180deg);
    }

    .card:hover .imgsize {
        height: 0;
        overflow: hidden;
        opacity: 0;
        transition: opacity .8s ease-out;
        -moz-transition: opacity .8s ease-out;
        -webkit-transition: opacity .8s ease-out;
    }

    .card:hover .rot {
        transform: rotate(180deg);
    }

    .card:hover .text-font {
        font-size: 20px;
        -webkit-transition: opacity .8s ease-in;
        -moz-transition: opacity .8s ease-in;
        -o-transition: opacity .8s ease-in;
        opacity: 1;
    }

    .title-font {
        /*margin-left: 6em;*/
        font-size: 40px;
        text-align: center;
        font-family: Montserrat;
        font-weight: bold;
        color: #5CC04A;
    }

    .text-font {
        text-align: center;
        opacity: 0;
        font-size: 0px;
        font-family: Montserrat;
        font-weight: normal;
        color: #BBBBBB;
    }

    .imgsize {
        opacity: 1;
        width: 176px;
        height: 176px;
    }

    .wrapper-infos {
        /*border: 2px red solid;*/
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .flex-cont {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>