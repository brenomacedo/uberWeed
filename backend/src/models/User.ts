import Sequelize, { Model, DataTypes, ConnectionOptions, ModelType } from 'sequelize'
import Asking from './Asking'
import sequelize from '../database/db'


class User extends Model {

    public name!: string
    public description!: string
    public username!: string
    public password!: string
    
    public id!: number
    public readonly createdAt?: Date
    public readonly updatedAt?: Date

}

User.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
}, {
    sequelize,
    tableName: 'User'
})

User.hasMany(Asking, { foreignKey: 'userId', as: 'asking' })
Asking.belongsTo(User, { foreignKey: 'userId', as: 'user' })

export default User