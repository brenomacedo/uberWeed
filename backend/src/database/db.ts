import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const database = new Sequelize()

export default database