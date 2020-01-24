<template>
    <div class="flex-box">
        <p class="f-size45 font-st green-terradia ml07">L'application qui facilite<br>l'accès aux produits<br>locaux.
        </p>
        <div class="flex-stores">
            <img src="../assets/images/appstore.svg">
            <img src="../assets/images/playstore.svg">
        </div>
        <p class="ml1 f-size24 grey-terradia font-st mt1">Parce que nous ne sommes jamais assez<br>proche de notre
            terroire.</p>
        <img src="../assets/images/iphone-app.svg" class="iphone">
        <div class="slogan-bas">
        <p class="font-st f-size45 color-white">Terradia vous permet de<br>consommer local sans le<br>moindre effort.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tractor"
    }
</script>

<style scoped>

    @media (max-width: 1200px)
    {
        .tractor
        {
            display: none;
        }
    }

    .slogan-bas {
        display: flex;
        margin-right: 5em;
        justify-content: flex-end;
        margin-top: 18em;
        text-align: right;
    }

    .iphone {
        position: absolute;
        margin-top: 6em;
        margin-right: 12em;
        right: 0;
        float: right;
        order: 2;
    }

    .flex-stores {
        order: 0;
        margin-left: 2em;
        padding-top: 2em;
    }

    .flex-box {
        background: url("../assets/images/background-tractor-terradia.svg");
        background-size: cover;
        width: 100%;
        position: absolute;
        flex-direction: column;
        display: flex;
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