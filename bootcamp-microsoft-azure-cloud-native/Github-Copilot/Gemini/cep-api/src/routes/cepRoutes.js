const express = require('express');
const { getCep } = require('../controllers/cepController');

const setCepRoutes = (app) => {
    app.get('/cep/:cep', getCep);
};

module.exports = setCepRoutes;