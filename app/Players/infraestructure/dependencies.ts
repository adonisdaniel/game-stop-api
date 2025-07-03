import app from '@adonisjs/core/services/app'
import { PlayerController } from './player.controller.js'

export const playerController = await app.container.make(PlayerController)
