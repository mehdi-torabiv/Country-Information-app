<template>
  <div class="nav shadow-lg">
    <b-container>
      <b-row class="d-flex align-items-baseline justify-content-between">
        <b-col cols="6">
          <h3 class="pt-2">
            where is the world?
          </h3>
        </b-col>
        <b-col cols="6" class="text-right">
          <p @click="toggleMode">
            {{ isDark ? "Dark Mode" : "Light Mode" }}
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      colors: ['system', 'light', 'dark', 'sepia'],
      isDark: true
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
