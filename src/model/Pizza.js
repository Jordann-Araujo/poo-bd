let {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");

const Pizza = db.define("Pizza",
    {
        id_pizza: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tamanho: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sabor1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sabor2: DataTypes.STRING

    }
);

module.exports = Pizza;