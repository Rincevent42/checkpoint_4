const db = require('../../db.js');

class Car {
  // Récupère toutes les voitures de la base de donnée
  static async getAll () {
    return db.query('SELECT * FROM car ORDER BY mark, category, model, version ASC');
  }

  // Récupère toutes les voitures de la base de donnée
  static async getNovelties () {
    return db.query('SELECT * FROM car ORDER BY date_of_purchase DESC LIMIT 10');
  }

  // Récupère le véhicule dont l'id est donné en paramètre d'URL
  static async findById (id) {
    return db.query('SELECT * FROM car WHERE id = ?', [id])
      .then(rows => {
        if (rows.length) {
          return Promise.resolve(rows[0]);
        } else {
          const err = new Error();
          err.kind = 'not_found';
          return Promise.reject(err);
        }
      });
  }

}

module.exports = Car;
