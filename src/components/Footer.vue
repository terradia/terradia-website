<template>
        <div class="footer">

            <div class="top-div">
            <img src="../assets/images/logo-white-terradia.svg">
                <div class="top-right">
                    <img src="../assets/images/instagram.svg" class="social-media">
                    <img src="../assets/images/facebook.svg" class="social-media">
                </div>
        </div>

        <div class="bottom-div" style="z-index: 1">
            <div class="bot-left">
                <a :href="`mailto:contact@terradia.eu`">Contact</a>
                <p>&copy; 2020 Terradia</p>
            </div>
            <div class="sub-bottom">
                <a>Mentions légales</a>
            </div>



        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

    .bot-left {
        border: red 2px solid;
        display: flex;
        flex-direction: column;
    }

    .sub-bottom {
        border: red 2px solid;
        display: flex;
        flex-direction: row;
    }

    .bottom-div {
        justify-content: space-between;
        margin-top: 0.5em;
        display: flex;
        flex-direction: row;
    }

    .social-media {
        width: 15%;
    }

    .top-right {
        margin: 1em;
        justify-content: space-around;
        display: flex;
    }

    .top-div {
        justify-content: space-between;
        display: flex;
        flex-direction: row;
    }

    .footer {
        font-family: Montserrat;
        font-style: normal;
        color: white;
        padding: 2em 0 0 2em;
        display: flex;
        flex-direction: column;
        background-color: #202020;
    }

</style>