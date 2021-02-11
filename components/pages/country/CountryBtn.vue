<template>
  <div
    :style="{backgroundColor : setBgColor , border : setBgColor}"
    class="tag shadow-lg rounded font-14 text-center px-2 mr-2 ml-md-2 mb-2 py-md-1 cursor-pointer"
    @click="$router.back()"
  >
    {{ country }}
  </div>
</template>

<script>
export default {
    props: {
        country: {
            type: String,
            required: true
        }
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
