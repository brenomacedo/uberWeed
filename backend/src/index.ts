import express from 'express'
import routes from './routes'
import cors from 'cors'
import http from 'http'
import socket from 'socket.io'
import { IAsking } from './interfaces'
const app = express()

const server = http.createServer(app)

const io = socket(server)

io.on('connection', (socket) => {
    socket.on('newAsking', (asking: IAsking) => {
        socket.broadcast.emit('newAskingToUser', asking)
    })
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

server.listen(3333, () => {
    console.log('hello world')
})