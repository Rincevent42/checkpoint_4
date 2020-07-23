const CarsController = require('../controllers/cars.controller.js');
const router = require('express').Router();

// Récupération des nouveautés
router.get('/novelties', CarsController.getNovelties);

// Récupération des détails d'un véhicule dont l'id est fourni en paramètre
router.get('/:id', CarsController.findOneById);

// Récupération de tous les véhicules
router.get('/', CarsController.findAll);

module.exports = router;
