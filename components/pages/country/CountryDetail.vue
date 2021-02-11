<template>
  <b-row>
    <b-col cols="6">
      <img src="" alt="country image">
    </b-col>
    <b-col cols="6">
      <header>
        <h3>
          Iran
        </h3>
      </header>
      <main class="d-flex justify-content-between">
        <div>
          <p>
            <span>
              Native Name:
            </span>
          </p>
          <p>
            <span>
              Population:
            </span>
          </p>
          <p>
            <span>
              Region:
            </span>
          </p>
          <p>
            <span>
              Sub Region:
            </span>
          </p>
          <p>
            <span>
              Capital:
            </span>
          </p>
        </div>
        <div>
          <p>
            <span>
              Top Level Domain:
            </span>
          </p>
          <p>
            <span>
              Currencies:
            </span>
          </p>
          <p>
            <span>
              Languages:
            </span>
          </p>
        </div>
      </main>
      <footer class="d-flex align-items-baseline">
        <p>Border Countries:</p>
        <div v-for="(country,index) in ['Germany','Iran','America']" :key="index">
          <country-btn :country="country" />
        </div>
      </footer>
    </b-col>
  </b-row>
</template>

<script>
import CountryBtn from '~/components/pages/country/CountryBtn.vue'
export default {
  components: {
    CountryBtn
  }
}
</script>

<style>

</style>
