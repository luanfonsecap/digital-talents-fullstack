const Sensor = require('../models/Sensor');
const { Op } = require('sequelize');

module.exports = {
  async index(req, res) {
    const sensor = await Sensor.findAll();

    return res.json(sensor);
  },

  async store(req, res) {
    const { height, width, length, voltage, brand, type, lastMeasure, location } = req.body;

    const sensor = await Sensor.create({ height, width, length, voltage, brand, type, lastMeasure, location });

    return res.json(sensor);
  },

  async update(req, res) {
    const { id } = req.params;
    const { height, width, length, voltage, brand, type, lastMeasure, location } = req.body;

    const sensor = await Sensor.update(
      { height, width, length, voltage, brand, type, lastMeasure, location },
      {
        where: {
          id: {
            [Op.eq]: id
          }
        }
      }
    );

    return res.json(sensor);
  },

  async delete(req, res) {
    const { id } = req.params;

    const sensor = await Sensor.destroy({
      where: {
        id
      }
    });

    return res.json(sensor);
  }  
};
