const express = require('express');
const ServicetypesController = require('../controllers/servicetypesController');

const router = express.Router();

router.get('/', ServicetypesController.index);
router.get('/:id', ServicetypesController.show);
router.post('/', ServicetypesController.create);
router.put('/:id', ServicetypesController.update);
router.delete('/:id', ServicetypesController.delete);

module.exports = router;
