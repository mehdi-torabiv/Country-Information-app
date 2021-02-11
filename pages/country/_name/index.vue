<template>
  <b-container>
    <b-row>
      <b-col cols="1">
        <back-button class="my-4" />
      </b-col>
    </b-row>
    <country-detail v-if="countryDetails[0]" :country-details="countryDetails[0]" />
  </b-container>
</template>

<script>
import BackButton from '~/components/global/BackButton.vue'
import CountryDetail from '~/components/pages/country/CountryDetail.vue'
export default {
  components: {
    BackButton,
    CountryDetail
  },
  data () {
    return {
      countryDetails: {}
    }
  },
  created () {
    console.log(this.$route.params)
    this.getDetails()
  },
  methods: {
    async getDetails () {
      const { data } = await this.$axios.get(`https://restcountries.eu/rest/v2/name/${this.$route.params.name}`)
      console.log(data)
      this.countryDetails = data
    }
  }
}
</script>

<style>

</style>
