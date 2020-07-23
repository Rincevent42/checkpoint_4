require('dotenv').config();
const Car = require('../models/car.model.js');

class CarsController {
  static async findAll (req, res) {
    try {
      const data = (await Car.getAll()).map(c => c);
      res.send({ data });
    } catch (err) {
      res.status(500).send({
        errorMessage: err.message || 'Some error occurred while retrieving users.'
      });
    }
  }
}

module.exports = CarsController;
