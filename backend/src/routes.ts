import { Router, Request, Response } from 'express'
import userController from './controllers/userController'
import authController from './controllers/authController'
const routes = Router()

routes.post('/user/create', userController.create)
routes.get('/user/select', userController.select)
routes.get('/authenticate', authController.authenticate)

export default routes