<template>
    <div class="background-img">
        <p class="pos-abs ma-07 f-size45 green-terradia font-st">L'application qui facilite<br>l'accès aux
            produits<br>locaux.</p>
        <div class="stores-container">
            <img src="../assets/images/appstore.svg" class="pos-rel stores">
            <img src="../assets/images/playstore.svg" class="pos-rel stores">
        </div>
            <p class="pos-abs ma-15 f-size24 mal-07 grey-terradia font-st">Parce que nous ne sommes jamais assez<br>
                proche de notre terroire.</p>
        <div>
            <img src="../assets/images/tractor-back.svg" class="tractor pos-abs o-hide mat-tractor">
            <img src="../assets/images/iphone-app.svg" class="pos-abs r0 ma-8 o-hide">
        </div>
        <p class="pos-abs r0 f-size45 mat-bot-sentence mar07 color-white font-st">Terradia vous permet de consommer
            local<br> sans le moindre effort.</p>
    </div>
</template>

<script>
    export default {
        name: "MainContent",
    }
</script>

<style scoped>

    .font-st {
        font-family: Montserrat;
    }

    .mar07 {
        margin-right: 0.7em;
    }

    .mat-bot-sentence {
        margin-top: 14em;
    }

    .mat-tractor {
        margin-top: 12em;
    }

    .stores-container {
        margin-top: 15.5em;
        margin-left: 1em;
        position: absolute
    }

    .stores {
        padding: 1em;
    }

    .pos-rel {
        position: relative;
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

    .o-hide {
        overflow: hidden;
    }

    .ma-15 {
        margin-top: 15em;
    }

    .mal-07 {
        margin-left: 1.5em;
    }

    .ma-07 {
        margin-left: 0.7em;
        margin-top: 0.7em;
    }

    .r0 {
        right: 0;
    }

    .pos-abs {
        position: absolute;
    }

    .tractor {
        width: 100%;
    }
</style>