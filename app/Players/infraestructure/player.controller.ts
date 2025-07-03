import { HttpContext } from '@adonisjs/core/http'
import playerModel from './player.model.js'

export class PlayerController {
  public getAll = async ({ response }: HttpContext) => {
    try {
      const players = await playerModel.find({}).limit(10)

      return response.ok(players)
    } catch (error) {
      return response.status(500).json({ error: 'Error fetching players' })
    }
  }
}
