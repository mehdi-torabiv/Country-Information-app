<template>
  <b-container class="text-white">
    <b-row>
      <b-col cols="1">
        <back-button class="my-4" />
      </b-col>
    </b-row>
    <country-detail />
  </b-container>
</template>

<script>
import BackButton from '~/components/global/BackButton.vue'
import CountryDetail from '~/components/pages/country/CountryDetail.vue'
export default {
  components: {
    BackButton,
    CountryDetail
  }
}
</script>

<style>

</style>
