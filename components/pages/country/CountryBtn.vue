<template>
  <div
    class="bg-dark shadow-lg text-white rounded  text-center px-2 mx-2 py-1 cursor-pointer"
    @click="$router.back()"
  >
    {{ country }}
  </div>
</template>

<script>
export default {
    props: {
        country: {
            type: String,
            required: true
        }
    }
}
</script>

<style></style>
