const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../db/bd');
//models o interface
class User extends Model {}

User.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        first_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name:{
            type: DataTypes.STRING,
            allowNull:  true
        },
        email:{
            type: DataTypes.STRING,
            allowNull:  true
        },
        role:{
            type: DataTypes.STRING,
            allowNull:  true
        },
        age:{
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        tableName: "user",
        timestamps: false
    }
)

module.exports = User;