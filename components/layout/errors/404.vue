<template>
  <b-container>
    <b-row>
      <b-col class="d-flex text-center flex-column justify-content-center">
        <h1 class="font-300">
          404
        </h1>
        <h3>
          {{ error.message }}
        </h3>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>
