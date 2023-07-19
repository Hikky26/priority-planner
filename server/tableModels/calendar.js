const {DataTypes} = require('sequelize')

const {sequelize} = require('../controller/databaseController')


module.exports = {
    Calendar : sequelize.define('calendar', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        user_id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        toDo_id: DataTypes.INTEGER,
        category: DataTypes.STRING
    })
}
