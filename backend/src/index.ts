import express from 'express'
import './database/db'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3333, () => {
    console.log('hello world')
})