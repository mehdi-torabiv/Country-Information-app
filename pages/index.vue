<template>
  <b-container>
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
  }
}
</script>
