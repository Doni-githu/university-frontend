<template>
  <header>
    <Navbar />
  </header>
  <main>
    <RouterView />
  </main>
</template>
<script>
import { RouterView } from "vue-router"
import Navbar from "./components/Navbar/Navbar.vue";
export default {
  components: { Navbar },
  mounted() {
    if (localStorage.getItem('token')) {
      this.$store.dispatch('getUser')
    }
  }
}
</script>
<style>
main {
  width: 80%;
  margin: 0 auto;
}



</style>