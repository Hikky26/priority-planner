const {DataTypes} = require('sequelize')

const {sequelize} = require('../controller/databaseController')

module.exports = {
    ToDo : sequelize.define('todos', {
        todo_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
        category: DataTypes.STRING,
        date_start: DataTypes.DATE,
        date_due: DataTypes.DATE,
        details: DataTypes.TEXT,
    },{
        timestamps: false, // Set timestamps option to false
    })
}
