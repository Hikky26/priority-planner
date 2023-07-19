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
        author: DataTypes.STRING,
        affirmation: DataTypes.TEXT,
    },{
        timestamps: false
    }
    )
}
