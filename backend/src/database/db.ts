import { Sequelize, DataTypes } from 'sequelize'
import dotenv from 'dotenv'
const config = require('../config/index')

const sequelize = new Sequelize(config)

export default sequelize