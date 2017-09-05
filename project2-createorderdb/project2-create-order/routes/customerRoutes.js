const express = require('express');
const CustomersController = require('../controllers/customersController');

const router = express.Router();

router.get('/', CustomersController.index);
router.get('/:id', CustomersController.show);
router.post('/', CustomersController.create);
router.put('/:id', CustomersController.update);
router.delete('/:id', CustomersController.delete);

module.exports = router;
