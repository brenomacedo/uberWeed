import { Request, Response, NextFunction } from 'express'
import { key } from '../auth.json'
import jwt from 'jsonwebtoken'

export default (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    if(!authHeader)
        return res.status(401).send('NO TOKEN PROVIDED!')
    
    if(authHeader?.split(' ').length !== 2)
        return res.status(401).send('TOKEN FORMAT IS INVALID')
    
    if(!authHeader?.match(/Bearer/))
        return res.status(401).send('TOKEN FORMAT IS INVALID')

    const token = authHeader.split(' ')[1]

    jwt.verify(token, key, (err, decoded) => {
        if(err) {
            res.status(401).send('INVALID TOKEN')
        }
        
        req.body.userId = decoded
        return next()
    })
}