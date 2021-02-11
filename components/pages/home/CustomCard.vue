<template>
  <div class="bg-dark text-white rounded shadow-md my-3 my-md-auto cursor-pointer">
    <img src="" height="200" alt="country image">
    <div class="pl-4 py-4">
      <h4>
        country name
      </h4>
      <p>
        <span class="d-block py-1">
          population
        </span>
        <span class="d-block py-1">
          population
        </span>
        <span class="d-block py-1">
          population
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
