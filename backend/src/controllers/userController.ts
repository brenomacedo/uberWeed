import { Request, Response } from 'express'
import User from '../models/User'

export default {
    async create(req: Request, res: Response) {
        const user = await User.create({
            name: 'asdasd',
            username: 'asd',
            password: 'req.body.password',
            description: 'req.body.description'
        })

        return res.send('usuario criado com sucesso')
    }
}