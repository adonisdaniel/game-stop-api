import router from '@adonisjs/core/services/router'
import { playerController } from './dependencies.js'

export default () => {
  router.get('/', playerController.getAll)
}
