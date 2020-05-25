import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/db'

class Asking extends Model {

    public lat!: number
    public lng!: number
    public userId!: number 
    public description!: number
    public pending!: boolean
    public done!: boolean

    public id?: number
    public updatedAt?: Date
    public createdAt?: Date
    
}

Asking.init({
    lat: DataTypes.NUMBER,
    lng: DataTypes.NUMBER,
    userId: DataTypes.NUMBER,
    description: DataTypes.STRING,
    pending: DataTypes.BOOLEAN,
    done: DataTypes.BOOLEAN
}, {
    sequelize,
    tableName: 'Asking'
})

export default Asking