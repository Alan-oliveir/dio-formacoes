# CEP API

This project is a simple Node.js API that allows users to fetch address information based on a Brazilian postal code (CEP) using the Via CEP service.

## Features

- Fetch address details by providing a valid CEP.
- Simple and easy-to-use API endpoints.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

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

### Running the API

To start the API server, run the following command:

```
npm start
```

The server will start on `http://localhost:3000`.

### API Endpoints

- **GET /cep/:cep**

  Fetches the address information for the provided CEP.

  **Parameters:**
  
  - `cep`: The postal code you want to look up.

  **Example Request:**

  ```
  GET http://localhost:3000/cep/01001-000
  ```

  **Example Response:**

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

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

### License

This project is licensed under the MIT License. See the LICENSE file for details.