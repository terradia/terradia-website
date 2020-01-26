<template>
  <v-app style="background-color: white;">
    <Header/>
    <MainContent/>
    <Footer/>
  </v-app>
</template>

<script>
  import Header from './components/Header';
  import MainContent from './components/MainContent';
  import Footer from "./components/Footer";
export default {
  name: 'App',

  components: {
    Footer,
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
