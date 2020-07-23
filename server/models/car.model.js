const db = require('../../db.js');

class Car {
  // Récupère toutes les voitures de la base de donnée
  static async getAll () {
    return db.query('SELECT * FROM car ORDER BY mark, category, model, version ASC');
  }

  // Récupère toutes les voitures de la base de donnée
  static async getNovelties () {
    return db.query('SELECT * FROM car ORDER BY date_of_purchase DESC LIMIT 5');
  }
}

module.exports = Car;
