const { Sequelize } = require('sequelize');
const { database } = require('../config/environments');
const config = database

const sequelize = new Sequelize (
    config.database,
    config.username,
    config.password,{
        host: config.host,
        dialect:config.dialect
    }
);



module.exports = sequelize;