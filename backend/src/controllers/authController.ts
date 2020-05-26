import { Request, Response } from 'express'
import User from '../models/User'

export default {
    async authenticate(req: Request, res: Response) {
        const user = await User.findOne({
            where: {
                username: String(req.query.username)
            }
        })

        if(!user) {
            return res.status(404).send('User not found')
        }

        return res.json(user)
    }
}