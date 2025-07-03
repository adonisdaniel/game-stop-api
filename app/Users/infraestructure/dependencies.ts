import app from '@adonisjs/core/services/app'
import { UserController } from './users.controller.js'

export const userController = await app.container.make(UserController)
