import { Request, Response } from 'express'
import Asking from '../models/Asking'
import { io } from '../index'

export default {
    async createAsking (req: Request, res: Response) {
        const asking = await Asking.create({
            lat: req.body.lat,
            lng: req.body.lng,
            userId: req.body.userId,
            description: req.body.description,
            pending: req.body.pending,
            done: req.body.pending
        })

        io.sockets.emit('newAskingToUser', asking)

        return res.json(asking)
    },
    
    async selectAsking (req: Request, res: Response) {
        const asking = await Asking.findAll()

        return res.json(asking)
    },

    async updateAsking (req: Request, res: Response) {
        const asking = await Asking.update({
            pending: req.body.pending,
            done: req.body.done
        }, {
            where: {
                id: req.params.id
            }
        })

        return res.json(asking)
    },

    async deleteAsking (req: Request, res: Response) {
        await Asking.destroy({
            where: {
                id: req.params.id
            }
        })

        return res.send('Asking successfuly deleted!')
    }
}