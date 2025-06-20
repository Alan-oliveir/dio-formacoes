# E-Commerce Cloud - Cadastro de Produtos

Este projeto é uma aplicação de cadastro e listagem de produtos para e-commerce, utilizando Streamlit como interface web, Azure Blob Storage para armazenamento de imagens e Azure SQL Database para persistência dos dados dos produtos.

## Funcionalidades

- Cadastro de produtos com nome, descrição, preço e imagem.
- Upload de imagens para o Azure Blob Storage.
- Persistência dos dados dos produtos no Azure SQL Database.
- Listagem dos produtos cadastrados em formato de cards.

## Estrutura do Projeto

```
.env
.gitignore
infos.txt
main.py
requirements.txt
```

- `main.py`: Código principal da aplicação Streamlit.
- `.env`: Variáveis de ambiente (NÃO subir para o GitHub).
- `requirements.txt`: Dependências do projeto.
- `infos.txt`: Script SQL para criação da tabela de produtos.

## Como Executar

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Crie e configure o arquivo `.env`:**
   Preencha as variáveis de ambiente necessárias para conexão com o Azure Blob Storage e Azure SQL Database.

3. **Instale as dependências:**
   ```sh
   pip install -r requirements.txt
   ```

4. **Execute a aplicação:**
   ```sh
   streamlit run main.py
   ```

## Configuração do Banco de Dados

Crie a tabela de produtos no seu banco de dados SQL utilizando o script abaixo (presente em `infos.txt`):

```sql
CREATE TABLE Produtos (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nome NVARCHAR(255),
    descricao NVARCHAR(MAX),
    preco DECIMAL(18,2),
    imagem_url NVARCHAR(2083)
)
```

## Variáveis de Ambiente

Exemplo de `.env`:

```
BLOB_CONNECTION_STRING=""
BLOB_CONTAINER_NAME="fotos"
BLOB_ACCOUNT_NAME="seuaccountname"

SQL_SERVER=""
SQL_DATABASE=""
SQL_USER=""
SQL_PASSWORD=""
```

## Observações

- O arquivo `.env` está listado no `.gitignore` e **não deve ser versionado**.
- Certifique-se de que as credenciais do Azure estejam corretas e que o banco de dados e o container do Blob Storage estejam criados.

## Licença

Este projeto é apenas para fins educacionais.