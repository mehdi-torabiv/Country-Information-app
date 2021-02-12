<template>
  <div>
    <component :is="errorPage" :error="error" />
  </div>
</template>

<script>
import error404 from '~/components/layout/errors/404.vue'
import error500 from '~/components/layout/errors/500.vue'
export default {
    name: 'NuxtError',
    layout: 'default',
    props: {
        error: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        errorPage () {
            switch (this.error.statusCode) {
                case 404 :
                    return error404
                case 500 :
                    return error500
            }
            return this.error.statusCode
        }
    }
}
</script>

<style>

</style>
