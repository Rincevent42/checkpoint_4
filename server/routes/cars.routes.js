const CarsController = require('../controllers/cars.controller.js');
const router = require('express').Router();

// Validation d'un nouveau freelance par son email
router.get('/', CarsController.findAll);

module.exports = router;
