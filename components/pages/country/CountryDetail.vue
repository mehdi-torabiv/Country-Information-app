<template>
  <b-row>
    <b-col cols="12" md="6">
      <img :src="countryDetails.flag" class="w-100 w-md-50" alt="country image">
    </b-col>
    <b-col cols="12" md="6" class="pt-4">
      <header>
        <h3>
          {{ countryDetails.name }}
        </h3>
      </header>
      <main class="d-flex flex-column flex-md-row justify-content-between">
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
      <footer class="d-flex flex-column flex-md-row align-items-baseline">
        <p class="white-space-nowrap">Border Countries:</p>
        <div class="d-flex flex-wrap">
          <country-btn v-for="(country,index) in countryDetails.borders" :key="index" :country="country" />
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
