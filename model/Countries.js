/* eslint-disable space-before-function-paren */
import Model from './Model'

export default class User extends Model {
    // Set the resource route of the model
    resource() {
        return 'all'
    }
}
