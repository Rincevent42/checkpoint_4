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

  static async getNovelties (req, res) {
    try {
      const data = (await Car.getNovelties()).map(c => c);
      res.send({ data });
    } catch (err) {
      res.status(500).send({
        errorMessage: err.message || 'Some error occurred while retrieving users.'
      });
    }
  }

  static async findOneById (req, res) {
    try {
      const data = await Car.findById(req.params.id);
      res.send({ data });
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({ errorMessage: `Vehicule with id ${req.params.id} not found.` });
      } else {
        res.status(500).send({ errorMessage: 'Error retrieving vehicule with id ' + req.params.id });
      }
    }
  }
}

module.exports = CarsController;
