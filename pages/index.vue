<template>
  <b-container>
    <b-row cols="d-flex jutify-content-between align-items-center">
      <b-col cols="5">
        <b-input class="bg-dark border-dark shadow-lg mt-4" placeholder="search for a country..." />
      </b-col>
      <b-col cols="5" />
      <b-col cols="2">
        <b-form-select
          v-model="selectedContinent"
          class="mt-4 bg-dark border-dark shadow-lg text-white"
          placeholder="Filter by Region"
          :options="['africa','america','asia','europe','oceania']"
        />
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col cols="3">
        <custom-card />
      </b-col>
      <b-col cols="3">
        <custom-card />
      </b-col>
      <b-col cols="3">
        <custom-card />
      </b-col>
      <b-col cols="3">
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
      selectedContinent: ''
    }
  }
}
</script>
