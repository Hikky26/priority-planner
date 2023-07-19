const {DataTypes} = require('sequelize')

const {sequelize} = require('../controller/databaseController')

module.exports = {
    Affirmations : sequelize.define('affirmations', {
        affirmation_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        user_id: DataTypes.INTEGER,
        affirmation: DataTypes.TEXT,
    })
}
