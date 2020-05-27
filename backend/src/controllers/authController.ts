import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { key } from '../auth.json'
import bcryptjs from 'bcryptjs'
import User from '../models/User'

export default {
    async authenticate(req: Request, res: Response) {
        const user = await User.findOne({
            where: {
                username: req.body.username
            },
            attributes: ['id','name','username','description','password'],
            include: ['asking']
        })

        if(!user) {
            return res.status(404).send('User or password are incorrects!')
        }


        if(!await bcryptjs.compare(req.body.password, user.password)) {
            return res.status(404).send('User or password are incorrects!')
        }

        user.password = undefined
        const token = jwt.sign({ id: user.id }, key, { expiresIn: 86400 })
        

        return res.json({ user, token })
    },

    async tokenProvided(req: Request, res: Response) {
        const user = await User.findByPk(req.body.userId.id, {
            attributes: ['id', 'name', 'username', 'description'],
            include: ['asking']
        })

        if(!user) {
            return res.status(404).send('USER NOT FOUND')
        }

        return res.json(user)
    }
}