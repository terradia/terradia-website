<template>
  <v-app style="background-color: white;">
    <Header/>
    <MainContent/>

  </v-app>
</template>

<script>
  import Header from './components/Header';
  import MainContent from './components/MainContent';
export default {
  name: 'App',

  components: {
    // Footer,
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
