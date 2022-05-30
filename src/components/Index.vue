<template>
  <Header></Header>
  <Home></Home>
  <Footer></Footer>
</template>

<script>
import Header from './Header.vue'
import Home from './Home.vue'
import Footer from './Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Footer
  }
}
</script>

<style lang="scss">
  @import '../assets/css/app.scss';
</style>
