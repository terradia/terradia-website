<template>
  <v-app style="background-color: white;">
    <Header/>
    <MainContent/>
  </v-app>
</template>

<script>
  import Header from './components/Header';
  import MainContent from './components/MainContent';
  //import InfosText from './components/InfosText'
export default {
  name: 'App',

  components: {
    //InfosText,
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
