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
  provide: {
    data: [
      {
        txt: "Moliya va moliyaviy texnologiyalar",
        id: 0,
        prices: [
          {
            txt: 'Kunduzgi',
            price: '11 800 000',
            id: 2
          },
          {
            txt: 'Sirtqi',
            price: '14 000 000',
            id: 1,
          },
          {
            txt: 'Masofaviy',
            price: '14 000 000',
            id: 3,
          },

        ]
      },
      {
        id: 1,
        txt: 'Buxgalteriya hisobi va audit',
        prices: [
          {
            txt: 'Kunduzgi',
            price: '11 800 000',
            id: 2
          },
          {
            txt: 'Sirtqi',
            price: '14 000 000',
            id: 1,
          },
          {
            txt: 'Masofaviy',
            price: '14 000 000',
            id: 3,
          },

        ]
      },
      {
        id: 2,
        txt: 'Pedagogika va psixologiya',
        prices: [
          {
            txt: 'Sirtqi',
            price: '12 000 000',
            id: 1,
          },
          {
            txt: 'Masofaviy',
            price: '12 000 000',
            id: 3,
          },
          {
            txt: 'Kunduzgi',
            price: '9 800 000',
            id: 2
          },
        ]
      },
      {
        id: 3,
        txt: "Boshlang'ich ta'lim",
        prices: [
          {
            txt: 'Sirtqi',
            price: '12 000 000',
            id: 1,
          },
          {
            txt: 'Masofaviy',
            price: '12 000 000',
            id: 3,
          },
          {
            txt: 'Kunduzgi',
            price: '9 800 000',
            id: 2
          },
        ]
      },
      {
        id: 4,
        txt: "I.T (dasturiy injiniring)",
        prices: [
          {
            txt: 'Kunduzgi',
            price: '10 800 000',
            id: 2
          },
          {
            txt: 'Sirtqi',
            price: '12 000 000',
            id: 1,
          },
          {
            txt: 'Masofaviy',
            price: '12 000 000',
            id: 3,
          },
        ]
      },
      {
        id: 5,
        txt: "Filologiya",
        prices: [
          {
            txt: 'Kunduzgi',
            price: '12 000 000',
            id: 2
          },
        ]
      },
      {
        txt: "Maktabgacha ta'lim",
        id: 6,
        prices: [
          {
            txt: 'Kunduzgi',
            price: '12 000 000',
            id: 1
          },
          {
            txt: 'Sirtqi',
            price: '9 800 000',
            id: 2
          },
          {
            txt: "Masofaviy",
            price: '9 800 000',
            id: 3,
          }
        ]
      }
    ]
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
  background: linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, .1), rgba(0, 0, 0, 0)), url('/back.png');
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
}

main {
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
}

@media only screen and (max-width:964px) {
  #app {
    background-size: initial;
  }
}

@media only screen and (max-width:671px) {
  main {
    width: 95%;
  }
}
</style>