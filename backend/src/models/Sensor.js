const { Model, DataTypes } = require('sequelize');

class Sensor extends Model {
  static init(sequelize) {
    super.init({
      height: DataTypes.FLOAT,
      width: DataTypes.FLOAT,
      length: DataTypes.FLOAT,
      voltage: DataTypes.FLOAT,
      brand: DataTypes.STRING,
      type: DataTypes.STRING,
      lastMeasure: DataTypes.STRING,
      location: DataTypes.STRING
    }, { sequelize });
  }
}

module.exports = Sensor;
