<template>
  <b-row>
    <b-col cols="6">
      <img :src="countryDetails.flag" width="500" alt="country image">
    </b-col>
    <b-col cols="6">
      <header>
        <h3>
          {{ countryDetails.name }}
        </h3>
      </header>
      <main class="d-flex justify-content-between">
        <div>
          <p>
            <span>
              Native Name:
            </span>
            <span>
              {{ countryDetails.nativeName }}
            </span>
          </p>
          <p>
            <span>
              Population:
            </span>
            <span>
              {{ countryDetails.population }}
            </span>
          </p>
          <p>
            <span>
              Region:
            </span>
            <span>
              {{ countryDetails.region }}
            </span>
          </p>
          <p>
            <span>
              Sub Region:
            </span>
            <span>
              {{ countryDetails.subregion }}
            </span>
          </p>
          <p>
            <span>
              Capital:
            </span>
            <span>
              {{ countryDetails.capital }}
            </span>
          </p>
        </div>
        <div>
          <p>
            <span>
              Top Level Domain:
            </span>
            <span>
              {{ countryDetails.topLevelDomain[0] }}
            </span>
          </p>
          <p>
            <span>
              Currencies:
            </span>
            <span>
              {{ countryDetails.currencies[0].name }}
            </span>
          </p>
          <p>
            <span>
              Languages:
            </span>
            <span>
              {{ countryDetails.languages[0].name }}
            </span>
          </p>
        </div>
      </main>
      <footer class="d-flex align-items-baseline">
        <p>Border Countries:</p>
        <div v-for="(country,index) in countryDetails.borders" :key="index">
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
  },
  props: {
    countryDetails: {
      type: Object,
      reqired: true
    }
  }
}
</script>

<style>

</style>
