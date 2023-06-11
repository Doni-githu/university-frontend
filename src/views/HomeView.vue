<template>
  <div class="showcase">
    <Kirish />
  </div>
  <div class="end2" id="end2">
    <Cards />
  </div>
</template>
<script>
import Cards from '../components/Cards.vue';
import Kirish from '../components/Kirish.vue';
import Register from '../components/Register.vue';

export default {
  components: { Register, Kirish, Cards }
}
</script>
<style scoped>
.end2 {
  margin: 500px 0;
  
}
</style>