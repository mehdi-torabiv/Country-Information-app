<template>
  <b-container>
    <b-row cols="d-flex jutify-content-between align-items-center">
      <b-col cols="12" md="5">
        <b-input
          v-model="name"
          class="bg-dark border-dark shadow-lg mt-4"
          placeholder="search for a country..."
          @keyup.enter="findCountryByName"
        />
      </b-col>
      <b-col cols="0" md="5" />
      <b-col cols="6" md="2">
        <b-dropdown v-model="selectedRegion" text="Filter by Region" menu-class="bg-dark" variant="dark" class="shadow-lg mt-4">
          <b-dropdown-item
            v-for="(region,index) in regions"
            :key="index"
            class="text-white"
            @click="selectedRegion = region.value"
          >
            {{ region.name }}
          </b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
    <b-row class="mx-auto">
      <b-col v-for="(country,index) in countriesList" :key="index" cols="12" md="3" class="mt-4">
        <custom-card :country="country" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CustomCard from '~/components/pages/home/CustomCard.vue'
import Countries from '~/model/Countries.js'
export default {
  components: {
    CustomCard
  },
  data () {
    return {
      Countries,
      name: '',
      selectedRegion: '',
      selectedContinent: '',
      regions: [
        { name: 'Africa', value: 'AU' },
        { name: 'America', value: 'CAIS' },
        { name: 'Europe', value: 'EU' },
        { name: 'Asia', value: 'ASEAN' }
      ],
      countriesList: []
    }
  },
  watch: {
    selectedRegion () {
      this.findByRegion()
    }
  },
  created () {
    this.getAllCountries()
  },
  methods: {
    async getAllCountries () {
      const data = await Countries.get('/all')
      console.log(data)
      this.countriesList = data
      console.log('data', this.countriesList)
    },
    async findCountryByName () {
      const { data } = await this.$axios.get(process.env.COUNTRY_URL + `/rest/v2/name/${this.name}`)
      this.countriesList = data
      console.log('data', this.countriesList)
    },
    async findByRegion () {
      const { data } = await this.$axios.get(process.env.COUNTRY_URL + `/rest/v2/regionalbloc/${this.selectedRegion}`)
      this.countriesList = data
      console.log('data', this.countriesList)
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
