const db = require('../../db.js');

class Car {
  // Récupère toutes les voitures de la base de donnée
  static async getAll () {
    return db.query('SELECT * FROM car');
  }
}

module.exports = Car;
