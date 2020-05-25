import express from 'express'
import routes from './routes'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)


app.listen(3333, () => {
    console.log('hello world')
})