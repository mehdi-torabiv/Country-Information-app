<template>
  <b-container>
    <b-row cols="d-flex jutify-content-between align-items-center">
      <b-col cols="12" md="5">
        <b-input class="bg-dark border-dark shadow-lg mt-4" placeholder="search for a country..." />
      </b-col>
      <b-col cols="0" md="5" />
      <b-col cols="6" md="2">
        <b-dropdown text="Filter by Region" menu-class="bg-dark" variant="dark" class="shadow-lg mt-4">
          <b-dropdown-item v-for="(region,index) in regions" :key="index" class="text-white">
            {{ region }}
          </b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
    <b-row class="mt-4 mx-auto">
      <b-col cols="12" md="3">
        <custom-card />
      </b-col>
      <b-col cols="12" md="3">
        <custom-card />
      </b-col>
      <b-col cols="12" md="3">
        <custom-card />
      </b-col>
      <b-col cols="12" md="3">
        <custom-card />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CustomCard from '~/components/pages/home/CustomCard.vue'
export default {
  components: {
    CustomCard
  },
  data () {
    return {
      selectedContinent: '',
      regions: [
        'Africa', 'America', 'Oceania', 'Europe', 'Asia'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep{
  .dropdown-item{
    color: white !important;
  }
}
</style>
