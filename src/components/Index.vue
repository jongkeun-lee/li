<template>
  <Header @darkModeOn="dark = true" @darkModeOff="dark = false"></Header>
  <Home :dark="dark"></Home>
  <!-- <Footer></Footer> -->
</template>

<script>
import Header from "./Header.vue";
import Home from "./Home.vue";
// import Footer from "./Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
    // Footer,
  },
  data() {
    return {
      dark: false,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/css/app.scss";
</style>
