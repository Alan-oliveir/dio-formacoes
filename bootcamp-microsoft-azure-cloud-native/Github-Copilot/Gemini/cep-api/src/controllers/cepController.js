const axios = require('axios');
require('dotenv').config();

const getCep = async (req, res) => {
    const { cep } = req.params;

    try {
        const response = await axios.get(`${process.env.VIA_CEP_API_URL}/${cep}/json/`);
        if (response.data && !response.data.erro) {
            res.json(response.data);
        } else {
            res.status(404).json({ message: 'CEP not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data from Via CEP API', error: error.message });
    }
};

module.exports = { getCep };