const Sensor = require('../models/Sensor');
const { Op } = require('sequelize');

module.exports = {
  async index(req, res) {
    const sensor = await Sensor.findAll();

    return res.json(sensor);
  },


  

};
