export default {
    methods: {
        // eslint-disable-next-line space-before-function-paren
        formatPopulation(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
    }
}
