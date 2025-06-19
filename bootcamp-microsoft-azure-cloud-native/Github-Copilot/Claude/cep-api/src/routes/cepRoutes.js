const express = require('express');
const CepController = require('../controllers/cepController');

const setCepRoutes = (app) => {
    const router = express.Router();
    const cepController = new CepController();

    router.get('/cep/:cep', cepController.getAddressByCep.bind(cepController));

    app.use('/api', router);
};

module.exports = setCepRoutes;