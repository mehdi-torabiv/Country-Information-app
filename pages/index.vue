<template>
  <b-container>
    <b-row cols="d-flex jutify-content-between align-items-center">
      <b-col cols="12" md="5">
        <b-input-group
          class="border-dark shadow-lg mt-4"
          :style="{ backgroundColor: setBgColor, border: setBgColor }"
        >
          <template #prepend>
            <b-input-group-text :style="{ backgroundColor: setBgColor,fill:setTextColor, border: setBgColor }">
              <MdSearchIcon />
            </b-input-group-text>
          </template>
          <b-form-input
            v-model="name"
            placeholder="search for a country..."
            :style="{ backgroundColor: setBgColor,fill:setTextColor, border: setBgColor }"
            @keyup.enter="findCountryByName"
          />
        </b-input-group>
        <!-- <b-input
          v-model="name"
          class="border-dark shadow-lg mt-4"
          :style="{ backgroundColor: setBgColor, border: setBgColor }"
          placeholder="search for a country..."
          @keyup.enter="findCountryByName"
        /> -->
      </b-col>
      <b-col cols="0" md="5">
        <b-button
          class="border-dark shadow-lg mt-4"
          :style="{ backgroundColor: setBgColor, border: setBgColor, color :setTextColor}"
          @click="insertionSort(countriesList)"
        >
          population Sort
        </b-button>
      </b-col>
      <b-col cols="6" md="2" class="text-right">
        <b-dropdown
          v-model="selectedRegion"
          text="Filter by Region"
          menu-class="bg-dark"
          :variant="setBgColor"
          class="shadow-lg mt-4"
        >
          <b-dropdown-item
            v-for="(region, index) in regions"
            :key="index"
            @click="selectedRegion = region.value"
          >
            {{ region.name }}
          </b-dropdown-item>
        </b-dropdown>
      </b-col>
      <b-col
        v-for="(country, index) in countriesList"
        :key="index"
        cols="12"
        md="3"
        class="mt-4"
      >
        <custom-card :country="country" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import MdSearchIcon from 'vue-ionicons/dist/md-search.vue'
import CustomCard from '~/components/pages/home/CustomCard.vue'
import Countries from '~/model/Countries.js'
export default {
  components: {
    CustomCard,
    MdSearchIcon
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
  computed: {
    setTextColor () {
      return this.$nuxt.$colorMode.preference === 'dark' ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'
    },
    setBgColor () {
      return this.$nuxt.$colorMode.preference === 'dark'
        ? 'hsl(209, 23%, 22%)'
        : 'hsl(0, 0%, 100%)'
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
      this.countriesList = data
    },
    async findCountryByName () {
      const { data } = await this.$axios.get(
        process.env.COUNTRY_URL + `/rest/v2/name/${this.name}`
      )
      this.countriesList = data
    },
    async findByRegion () {
      const { data } = await this.$axios.get(
        process.env.COUNTRY_URL + `/rest/v2/regionalbloc/${this.selectedRegion}`
      )
      this.countriesList = data
    },
    insertionSort (list) {
      const len = list.length
      for (let i = 1; i < len; i++) {
        if (list[i].population < list[0].population) {
          list.unshift(list.splice(i, 1)[0])
        } else if (list[i].population > list[i - 1].population) {
          continue
        } else {
          for (let j = 1; j < i; j++) {
            if (list[i].population >= list[j - 1].population && list[i].population <= list[j].population) {
              list.splice(j, 0, list.splice(i, 1)[0])
            }
          }
        }
      }
      this.countriesList = list
    }

  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .dropdown-item {
    color: white !important;
  }
}
</style>
