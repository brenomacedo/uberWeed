import { Router, Request, Response } from 'express'
import userController from './controllers/userController'
import authController from './controllers/authController'
import askingController from './controllers/askingController'
import authMiddleware from './middlewares/auth'
const routes = Router()

//AUTH
routes.post('/authenticate', authController.authenticate)
routes.post('/tokenprovided',authMiddleware ,authController.tokenProvided)

//USER
routes.post('/user/create', userController.create)
routes.get('/user/select', userController.select)

//ASKING
routes.get('/asking/select/:id', askingController.selectAsking)
routes.post('/asking/create', askingController.createAsking)
routes.put('/asking/update/:id', askingController.updateAsking)
routes.delete('/asking/delete/:id', askingController.deleteAsking)

routes.post('/', (req, res) => {
    return res.send('hello world')
})

export default routes