<template>
    <div class="wrapper">
        <Tractor/>
    </div>
    <!--<div class="background-img">
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
    </div>-->
</template>

<script>
    import Tractor from './Tractor'

    export default {
        name: "MainContent",

        components: {
            Tractor,
        }
    }
</script>

<style scoped>

    .wrapper {
        position: relative;
        height: auto;
        min-height: 100% !important;
    }

</style>