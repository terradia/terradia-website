<template>
    <div>
        <Tractor/>
        <div class="infostext-wrapper">
            <div class="text-section">
        <InfosText
                title="Découvrez"
                text="Autour de vous, peut être dans la rue d’à côté, il y a un artisant qui fabrique la solution à vos problèmes. Terradia, vous aide à trouver les producteurs locaux autour d’on vous n’auriez jamais imaginé l’existance..."
                data-aos="slide-up" data-aos-duration="2000"
        />
        <v-divider
                class="mx-12 mt-2"
        />
        <InfosText
                title="Commandez"
                text="Grâce à Terradia, commandez vos produits locaux préférés, ou même des produits que vous ne connaissez pas encore a tout moment. Avec la livraison le jour même ou en J+1, profitez de vos achats instantanément..."
                data-aos="slide-up" data-aos-duration="2000"
        />
        <v-divider
                class="mx-12 mt-2"
        />
        <InfosText
                title="Profitez"
                text="Lorsque vous êtes livrés, l’expérience n’est pas terminée. Prenez votre temps pour profiter. Laissez un avis sur votre achat, découvrez les meilleurs conseils de producteurs, et découvrez les produits les plus en harmonie avec ce que vous avez choisi."
                data-aos="slide-up" data-aos-duration="2000"
        />
            </div>
            <img src="../assets/images/iphone-products-terradia.svg"
                 class="iphone"
                 data-aos="slide-left" data-aos-duration="2000"
            >
        </div>
        <Newsletter/>
        <Blog/>
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