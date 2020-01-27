<template>
    <div class="main-wrapper" data-aos="slide-right" data-aos-duration="2000">
        <div class="newsletter">
            <img src="../assets/images/newsletter-terradia.svg" class="img">
            <p class="text-font">Envie d'être tenu au courant des dernières nouveautés?</p>
            <div class="text-btn">
                <input type="text" name="email" class="input-newsletter" placeholder="Donnes-nous ton adresse mail !">
                <button class="btn font-st">Je m'inscris à la newsletter</button>
            </div>
        </div>
        <img src="../assets/images/divider.svg">
            <div class="footer">
                <a href="#">Mentions Légales</a>
                <div class="social-icons">
                    <img src="../assets/images/instagram.svg" class="social-media">
                    <img src="../assets/images/facebook.svg" class="social-media">
                </div>
                <p class="text-basic">&copy; 2020 Terradia</p>
            </div>
    </div>
</template>

<script>
    export default {
        name: "Newsletter"
    }
</script>

<style scoped>

    .text-basic {
        font-family: Montserrat;
        font-weight: lighter;
        font-size: 12px;
        color: white;
    }

    a:link {
        text-decoration: none;
        color: white;
    }

    a:visited {
        text-decoration: none;
        color: white;
    }

    .social-icons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .footer {
        margin-top: 1em;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
    }

    .social-media {
        width: 15%;
        margin: 1em;
    }

    .main-wrapper {
        padding: 1.5em;
        margin-top: 4em;
        background: url("../assets/images/rectangle-background-terradia.svg");
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-radius: 16px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom;
        display: flex;
        flex-direction: column;
    }

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
        outline:none;
        padding: 1em;
        font-family: Montserrat;
        font-weight: normal;
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
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .btn {
        outline:none;
        margin-top: 2em;
        padding: 0.5em 3em;
        border: 1px solid #FFFFFF;
        border-radius: 8px;
        font-family: Montserrat;
        font-weight: normal;
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

        align-items: center;
        display: flex;
        flex-direction: row;
    }
</style>