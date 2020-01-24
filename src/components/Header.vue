<template>
    <div class="header">
        <img src='../assets/images/logo-green-terradia.svg' class="logo">
        <button class="btn font-st">Je m'inscris dès maintenant</button>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

    .font-st {
        font-family: Montserrat;
    }

    .header {
        padding: 1.5em;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }

    .logo {
        height: 54px;
        width: 270px;
    }

    .btn {
        padding: 0.5em 3em;
        border: 1px solid #5CC04A;
        border-radius: 8px;
        color: #5CC04A;
        margin-top: 0.7em;
    }
</style>