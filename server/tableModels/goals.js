const {DataTypes} = require('sequelize')

const {sequelize} = require('../controller/databaseController')

module.exports = {
    Goals : sequelize.define('goals', {
        goal_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        user_id: DataTypes.INTEGER,
        goal: DataTypes.TEXT,
    })
}
