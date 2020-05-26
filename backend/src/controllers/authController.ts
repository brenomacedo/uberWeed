import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { key } from '../auth.json'
import bcryptjs from 'bcryptjs'
import User from '../models/User'

export default {
    async authenticate(req: Request, res: Response) {
        const user = await User.findOne({
            where: {
                username: String(req.query.username)
            },
            attributes: ['id','name','username','description']
        })

        if(!user) {
            return res.status(404).send('User or password are incorrects!')
        }

        if(!bcryptjs.compare(String(req.query.password), user.password)) {
            return res.status(404).send('User or password are incorrects!')
        }

        const token = jwt.sign({ id: user.id }, key, { expiresIn: 86400 })
        

        return res.json({ user, token })
    }
}