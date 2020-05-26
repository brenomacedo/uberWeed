import { Router, Request, Response } from 'express'
import userController from './controllers/userController'
import authController from './controllers/authController'
import authMiddleware from './middlewares/auth'
const routes = Router()

routes.post('/user/create', userController.create)
routes.get('/user/select', authMiddleware, userController.select)
routes.get('/authenticate', authController.authenticate)

export default routes