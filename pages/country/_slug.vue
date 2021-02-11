<template>
  <b-container class="text-white">
    <b-row>
      <b-col cols="1">
        <back-button class="my-4" />
      </b-col>
    </b-row>
    <country-detail :country-details="countryDetails" />
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
  async asyncData ({ $axios }) {
    const { data } = await $axios.$get('https://api.nuxtjs.dev/mountains')
    return { countryDetails: data }
  }
}
</script>

<style>

</style>
