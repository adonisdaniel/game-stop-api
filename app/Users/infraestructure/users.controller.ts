import { HttpContext } from '@adonisjs/core/http'
import usersModel from './users.model.js'

export class UserController {
  public getAll = async ({ response }: HttpContext) => {
    try {
      const users = await usersModel.find().limit(10)

      return response.ok(users)
    } catch (error) {
      return response.status(500).json({ error: 'Error fetching users' })
    }
  }
}
