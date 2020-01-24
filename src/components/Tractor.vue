<template>
    <div class="flex-box">
<!--        <img src="../assets/images/triangle.svg" class="triangle-background">-->
        <div class="flex-element-1">
            <p class="f-size45 font-st green-terradia ml07">L'application qui facilite<br>l'accès aux produits<br>locaux.
            </p>
            <div class="flex-stores">
                <img src="../assets/images/appstore.svg">
                <img src="../assets/images/playstore.svg" style="margin-left: 1em">
            </div>
            <p class="ml1 f-size24 grey-terradia font-st mt1">Parce que nous ne sommes jamais assez<br>proche de notre
                terroire.</p>
        </div>
        <div class="flex-element-2">
            <img src="../assets/images/iphone-app.svg" class="iphone">
<!--            <div class="slogan-bas">-->
<!--                <p class="font-st f-size45 color-white">Terradia vous permet de<br>consommer local sans le<br>moindre effort.</p>-->
<!--            </div>-->
        </div>

    </div>
</template>

<script>
    export default {
        name: "Tractor"
    }
</script>

<style scoped>

    .triangle-background {
        left: 0;
        z-index: 0;
        position: absolute;
        overflow: hidden;
    }

    .flex-element-1 {
        display: flex;
        width: 50%;
        flex-direction: column;
        border: 1px red solid;
        z-index: inherit;
    }

    .flex-element-2 {
        display: flex;
        width: 50%;
        border: 1px blue solid;
        align-items: center;
        justify-content: center;
        z-index: inherit;
    }

    .flex-box {
        z-index: 10000;
        width: 100%;
        flex-direction: row;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        border: 2px black solid;
        overflow: hidden;
        background: url("../assets/images/triangle.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: bottom right;
    }

    .iphone {
        right: 0;
        float: right;
        order: 2;
    }






    .slogan-bas {
        display: flex;
        margin-right: 5em;
        justify-content: flex-end;
        margin-top: 18em;
        text-align: right;
    }

    .flex-stores {
        order: 0;
        margin-left: 2em;
        padding-top: 2em;
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