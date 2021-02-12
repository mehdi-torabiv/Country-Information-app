<template>
  <b-row class="d-flex justify-content-between">
    <b-col cols="12" md="6">
      <img :src="countryDetails.flag" class="w-100 w-md-50" alt="country image">
    </b-col>
    <b-col cols="12" md="5" class="pt-4">
      <header class="py-4">
        <h3 class="font-weight-bold">
          {{ countryDetails.name }}
        </h3>
      </header>
      <main class="d-flex flex-column flex-md-row justify-content-between">
        <div>
          <p>
            <span class="font-14 font-weight-bold">
              Native Name:
            </span>
            <span class="font-14">
              {{ countryDetails.nativeName }}
            </span>
          </p>
          <p>
            <span class="font-14 font-weight-bold">
              Population:
            </span>
            <span class="font-14">
              {{ formatPopulation(countryDetails.population) }}
            </span>
          </p>
          <p>
            <span class="font-14 font-weight-bold">
              Region:
            </span>
            <span class="font-14">
              {{ countryDetails.region }}
            </span>
          </p>
          <p>
            <span class="font-14 font-weight-bold">
              Sub Region:
            </span>
            <span class="font-14">
              {{ countryDetails.subregion }}
            </span>
          </p>
          <p>
            <span class="font-14 font-weight-bold">
              Capital:
            </span>
            <span class="font-14">
              {{ countryDetails.capital }}
            </span>
          </p>
        </div>
        <div>
          <p>
            <span class="font-14 font-weight-bold">
              Top Level Domain:
            </span>
            <span class="font-14">
              {{ countryDetails.topLevelDomain[0] }}
            </span>
          </p>
          <p>
            <span class="font-14 font-weight-bold">
              Currencies:
            </span>
            <span class="font-14">
              {{ countryDetails.currencies[0].name }}
            </span>
          </p>
          <p>
            <span class="font-14 font-weight-bold">
              Languages:
            </span>
            <span class="font-14">
              {{ countryDetails.languages[0].name }}
            </span>
          </p>
        </div>
      </main>
      <footer class="d-flex flex-column flex-md-row align-items-baseline pt-5">
        <p class="white-space-nowrap">
          Border Countries:
        </p>
        <div class="d-flex flex-wrap">
          <country-btn
            v-for="(country,index) in countryDetails.borders"
            :key="index"
            :country="country"
          />
        </div>
      </footer>
    </b-col>
  </b-row>
</template>

<script>
import CountryBtn from '~/components/pages/country/CountryBtn.vue'
import global from '~/mixins/global.js'
export default {
  components: {
    CountryBtn
  },
  mixins: [global],
  props: {
    countryDetails: {
      type: Object,
      reqired: true
    }
  }
}
</script>
<style scoped>
p{
  padding: 0 !important;
  margin: 5px 0 !important;
}
</style>
