const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const productos = require('../api/productos');


module.exports = () => {
    router.get('/productos/vista', (req, res) => {
        let prods = productos.listar();
        res.render('form', {prods: prods, cantidad: prods.length, mensaje: "No hay productos"});
    });

    router.get('/productos/listar', productController.getProducts);
    router.get('/productos/listar/:id', productController.getOneProduct);
    router.post('/productos/guardar', productController.saveProduct);
    router.put('/productos/actualizar/:id', productController.updateProduct);
    router.delete('/productos/borrar/:id', productController.deleteProduct);

    return router;
};