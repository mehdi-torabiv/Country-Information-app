<template>
  <div class="nav shadow-lg font-14">
    <b-container>
      <b-row class="d-flex align-items-baseline py-2 justify-content-between">
        <b-col cols="6">
          <h3 class="pt-2 font-18 font-weight-bold">
            where is the world?
          </h3>
        </b-col>
        <b-col cols="6" class="d-flex justify-content-end align-items-baseline font-weight-bold">
          <MdMoonIcon class="pr-1" w="16px" h="16px" :style="{fill :setTextColor }" />
          <p @click="toggleMode">
            {{ isDark ? "Dark Mode" : "Light Mode" }}
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MdMoonIcon from 'vue-ionicons/dist/md-moon.vue'
export default {
  components: {
    MdMoonIcon
  },
  data () {
    return {
      colors: ['system', 'light', 'dark', 'sepia'],
      isDark: true
    }
  },
  computed: {
    setTextColor () {
      return this.$nuxt.$colorMode.preference === 'dark' ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'
    }
  },
  methods: {
    toggleMode () {
      this.isDark = !this.isDark
      // eslint-disable-next-line no-undef
      this.isDark ? this.$nuxt.$colorMode.preference = this.colors[1] : this.$nuxt.$colorMode.preference = this.colors[2]
    }
  }
}
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body,nav {
  background-color: hsl(207, 26%, 17%);
  color: hsl(0, 0%, 100%);
}
.light-mode body,nav {
  background-color: hsl(0, 0%, 98%);
  color: hsl(200, 15%, 8%);
}
</style>
