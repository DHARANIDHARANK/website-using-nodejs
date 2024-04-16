const express = require('express');
const router = express.Router();
const tourController = require('../Controller/tourController');

router.param('id', tourController.checkID);

// Route for creating a new tour

// Routes for other operations (e.g., getting all tours, searching, updating, deleting)
router.route('/:id')
    .get(tourController.searchTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);

router.route('/')
    .get(tourController.getALLTours)

router.route('/create')
    .post(tourController.checkBody, tourController.addTour);


module.exports = router;
