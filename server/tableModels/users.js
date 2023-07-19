const {DataTypes} = require('sequelize')

const {sequelize} = require('../controller/databaseController')

module.exports = {
    User : sequelize.define('all_users', {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        
    },{
        timestamps: false, // Set timestamps option to false
    })
}
