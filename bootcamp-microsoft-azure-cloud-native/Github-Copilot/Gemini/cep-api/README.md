# CEP API

This project is a simple Node.js API that allows users to fetch address information based on a Brazilian postal code (CEP) using the Via CEP API.

## Features

- Fetch address details by providing a valid CEP.
- Returns the address in JSON format.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/cep-api.git
   ```

2. Navigate to the project directory:

   ```
   cd cep-api
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add the following line:

   ```
   VIA_CEP_API_URL=https://viacep.com.br/ws
   ```

### Usage

1. Start the server:

   ```
   npm start
   ```

2. Make a GET request to the following endpoint, replacing `{cep}` with the desired postal code:

   ```
   GET http://localhost:3000/cep/{cep}
   ```

   Example:

   ```
   GET http://localhost:3000/cep/01001-000
   ```

3. The API will return a JSON response with the address details.

### Example Response

```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "ibge": "3550308",
  "gia": "1004",
  "ddd": "11",
  "siafi": "7087"
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.