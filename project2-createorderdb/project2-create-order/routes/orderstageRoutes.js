const express = require('express');
const OrderstagesController = require('../controllers/orderstagesController');

const router = express.Router();

router.get('/', OrderstagesController.index);
router.get('/:id', OrderstagesController.show);
router.post('/', OrderstagesController.create);
router.put('/:id', OrderstagesController.update);
router.delete('/:id', orderstagesController.delete);

module.exports = router;
