const express = require('express');

const router = express.Router();

const productsCtrl = require('../controllers/products')

router.get('/', productsCtrl.index);

router.get('/new', productsCtrl.new);

router.post('/', productsCtrl.create);

router.delete('/:id', productsCtrl.delete);

router.get('/:id/edit', productsCtrl.edit);

router.put('/:id', productsCtrl.update);

router.get('/:id/show', productsCtrl.show)

router.get('/:id', productsCtrl.show)


module.exports = router;

