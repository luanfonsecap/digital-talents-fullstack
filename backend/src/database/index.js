const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Sensor = require('../models/Sensor');

const connection = new Sequelize(dbConfig);

Sensor.init(connection);

module.exports = connection;
