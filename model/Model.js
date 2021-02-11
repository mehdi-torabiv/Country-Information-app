/* eslint-disable space-before-function-paren */
import { Model as BaseModel } from 'vue-api-query'

export default class Model extends BaseModel {
    baseURL() {
        return process.env.COUNTRY_URL
    }

    // Implement a default request method
    request(config) {
        return this.$http.request(config)
    }
}
