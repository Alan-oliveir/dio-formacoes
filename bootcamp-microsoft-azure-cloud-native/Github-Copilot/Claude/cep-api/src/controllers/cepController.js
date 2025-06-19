class CepController {
    constructor(viacepService) {
        this.viacepService = viacepService;
    }

    async getAddressByCep(req, res) {
        const { cep } = req.params;

        try {
            const address = await this.viacepService.fetchAddressByCep(cep);
            if (!address) {
                return res.status(404).json({ message: 'Endereço não encontrado' });
            }
            res.json(address);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar endereço', error: error.message });
        }
    }
}

export default CepController;