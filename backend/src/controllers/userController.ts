import { Request, Response } from 'express'
import User from '../models/User'
import bcryptjs from 'bcryptjs'
import { Op } from 'sequelize'

export default {
    async create(req: Request, res: Response) {

        const password = await bcryptjs.hash(String(req.body.password), 10)

        const user = await User.findOrCreate({
            where: {
                username: req.body.username
            },
            defaults: {
                name: req.body.name,
                username: req.body.username,
                password,
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
                name: { [Op.like]: `%${req.query.name}%` }
            },
            include: ['asking']
        })

        return res.json(user)
    }
}