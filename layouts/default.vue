<template>
  <div>
    <navbar />
    <Nuxt />
  </div>
</template>
<script>
import Navbar from '~/components/layout/Navbar.vue'
export default {
  components: {
  Navbar
  }
}
</script>
<style>
@import "assets/scss/app.scss";
</style>
