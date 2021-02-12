<template>
  <div
    :style="{backgroundColor : setBgColor , border : setBgColor}"
    class="back-btn shadow-lg rounded d-flex justify-content-center  text-center px-5 py-1 cursor-pointer"
    @click="$router.back()"
  >
    <MdArrowBackIcon class="pr-2" :style="{fill : setTextColor}" />
    Back
  </div>
</template>

<script>
import MdArrowBackIcon from 'vue-ionicons/dist/md-arrow-back.vue'
export default {
  components: {
    MdArrowBackIcon
  },
  computed: {
    setBgColor () {
      return this.$nuxt.$colorMode.preference === 'dark' ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'
    },
    setTextColor () {
      return this.$nuxt.$colorMode.preference === 'dark' ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'
    }
  }
}
</script>

<style>
.back-btn{
  margin: 4rem 0 !important;
}
</style>
