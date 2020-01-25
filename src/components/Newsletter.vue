<template>
    <div class="newsletter">
            <img src="../assets/images/newsletter-terradia.svg" class="img">
        <p class="text-font">Envie d'être tenu au courant des dernières nouveautés?</p>
        <div class="text-btn">
            <input type="text" name="email" class="input-newsletter" placeholder="Donnes-nous ton adresse mail !">
            <button class="btn font-st">Je m'inscris à la newsletter</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Newsletter"
    }
</script>

<style scoped>

    ::placeholder {
        color: white;
    }

    .text-btn {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        /*border: red 1px solid;*/
    }

    .input-newsletter:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .input-newsletter {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        padding: 1em;
        background-color: #CBCBCB;
        border-radius: 8px;
        width: 100%;
        text-align: center;
        color: white;
    }

    .img {
        width: 15%;
    }

    .btn:hover {
        background-color: #FFFFFF;
        color: rgba(92,192,72, 1);
    }

    .btn {
        margin-top: 2em;
        padding: 0.5em 3em;
        border: 1px solid #FFFFFF;
        border-radius: 8px;
        color: #FFFFFF;
    }

    .text-font {
        margin-left: 3em;
        font-size: 20px;
        font-family: Montserrat;
        font-weight: normal;
        color: white;
    }

    .newsletter {
        background: url("../assets/images/rectangle-background-terradia.svg");
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;

        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom;
        align-items: center;
        padding: 1.5em;
        margin-top: 4em;
        display: flex;
        flex-direction: row;
    }
</style>