<template>
  <v-app style="background-color: white;">
    <Header/>
    <MainContent/>
    <InfosText
            title="Découvrez"
            text="Autour de vous, peut être dans la rue d’à côté, il y a un artisant qui fabrique la solution à vos problèmes. Terradia, vous aide à trouver les producteurs locaux autour d’on vous n’auriez jamais imaginé l’existance..."
    />
    <InfosText
            title="Commandez"
            text="Grâce à Terradia, commandez vos produits locaux préférés, ou même des produits que vous ne connaissez pas encore a tout moment.
Avec la livraison le jour même ou en J+1, profitez de vos achats instantanément..."
    />
    <InfosText
            title="Profitez"
            text="Lorsque vous êtes livrés, l’expérience n’est pas terminée. Prenez votre temps pour profiter. Laissez un avis sur votre achat, découvrez les meilleurs conseils de producteurs, et découvrez les produits les plus en harmonie avec ce que vous avez choisi."
    />
  </v-app>
</template>

<script>
  import Header from './components/Header';
  import MainContent from './components/MainContent';
  import InfosText from "./components/InfosText";
export default {
  name: 'App',

  components: {
    InfosText,
    MainContent,
    Header,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
</style>
