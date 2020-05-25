import { Request, Response } from 'express'
import User from '../models/User'

interface Users{
    name: string
}

export default {
    async create(req: Request, res: Response) {
        const user = await User.findOrCreate({
            where: {
                username: req.body.username
            },
            defaults: {
                name: req.body.name,
                username: req.body.username,
                password: req.body.password,
                description: req.body.description
            }
        })

        if(!user[1]) {
            return res.status(403).send('Username já cadastrado!')
        }

        return res.json(user[0])
    },

    async select(req: Request, res: Response) {
        const user = await User.findAll({
            where: {
                name: req.body.name
            }
        })

        return res.json(user)
    }
}