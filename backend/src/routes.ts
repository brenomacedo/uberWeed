import { Router, Request, Response } from 'express'
import userController from './controllers/userController'
const routes = Router()

routes.post('/', userController.create)

export default routes