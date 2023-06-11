<template>
  <header>
    <Navbar />
  </header>
  <main>
    <RouterView />
  </main>
  <Footer />
</template>
<script>
import Footer from "./components/Footer/Footer.vue";
import { RouterView } from "vue-router"
import Navbar from "./components/Navbar/Navbar.vue";
export default {
  components: {
    Navbar,
    Footer
  },
  created() {
    if (localStorage.getItem('token')) {
      this.$store.dispatch('getUser')
    }
  },
}
</script>
<style>
#app {
  background: linear-gradient(rgba(255, 255, 255, 0.51), rgba(0, 0, 0, 0)), url('/back.png');
  background-repeat: no-repeat;
  background-position: top;
}

main {
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
}

@media only screen and (max-width:577px) {
  main {
    width: 95%;
  }
}
</style>