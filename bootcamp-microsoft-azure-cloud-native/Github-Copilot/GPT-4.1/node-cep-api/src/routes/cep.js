const express = require('express');
const router = express.Router();
const viacepService = require('../services/viacepService');

router.get('/cep/:cep', async (req, res) => {
    const cep = req.params.cep;
    try {
        const address = await viacepService.getAddressByCep(cep);
        res.json(address);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching address' });
    }
});

module.exports = router;