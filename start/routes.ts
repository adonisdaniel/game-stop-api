/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import playerRoutes from '../app/Players/infraestructure/player.routes.js'
import usersRoutes from '../app/Users/infraestructure/users.routes.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.group(playerRoutes).prefix('/players')
router.group(usersRoutes).prefix('/users')
