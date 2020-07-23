const carsController = require('../controllers/cars.controller.js');
const router = require('express').Router();

// Validation d'un nouveau freelance par son email
router.get('/', carsController.getAllCars);

module.exports = router;
