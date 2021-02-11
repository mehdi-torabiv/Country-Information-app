<template>
  <div class="bg-dark overflow-hidden text-white rounded shadow-md my-3 my-md-auto cursor-pointer">
    <img :src="country.flag" height="200" width="250px" alt="country image">
    <div class="pl-4 py-4">
      <h4>
        {{ country.name }}
      </h4>
      <p>
        <span class="d-block py-1">
          population : {{ country.population }}
        </span>
        <span class="d-block py-1">
          Region : {{ country.region }}
        </span>
        <span class="d-block py-1">
          Capital : {{ country.capital }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    country: {
      type: Object,
      required: true
    }
  }

}
</script>

<style>

</style>
