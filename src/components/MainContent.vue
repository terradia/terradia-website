<template>
    <div>
        <Tractor/>
        <div class="infostext-wrapper">
<!--            <div class="text-section">-->
        <InfosText/>
<!--            </div>-->
<!--            <img src="../assets/images/iphone-products-terradia.svg"-->
<!--                 class="iphone"-->
<!--                 data-aos="slide-left" data-aos-duration="2000"-->
<!--            >-->
        </div>
        <Blog/>
        <Newsletter/>
    </div>
</template>

<script>
    import Tractor from './Tractor'
    import InfosText from './InfosText'
    import Newsletter from './Newsletter'
    import Blog from "./Blog";
    export default {
        name: "MainContent",

        components: {
            Blog,
            Tractor,
            InfosText,
            Newsletter
        }
    }
</script>

<style scoped>

    .iphone {
        width: 26%;
        transform: rotate(30deg);
    }

    .text-section {
        display: flex;
        flex-direction: column;
    }

    .infostext-wrapper {
        display: flex;
        flex-direction: row;
    }

</style>