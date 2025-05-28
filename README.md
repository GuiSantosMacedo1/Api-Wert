# API REST com Node.js, TypeScript e JWT

API REST para gerenciamento de produtos com autenticação JWT e controle de acesso para administradores.

## Funcionalidades

- Autenticação de usuários com JWT
- Controle de acesso baseado em perfil (admin/usuário comum)
- CRUD de produtos (Create, Read, Update, Delete)
- Restrição de operações de criação, edição e exclusão apenas para administradores

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- MongoDB com Mongoose
- JWT para autenticação
- bcryptjs para hash de senhas

## Instalação

1. Clone o repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Copie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente:
   ```
   cp .env.example .env
   ```
4. Execute o servidor:
   ```
   npm run dev
   ```

## Endpoints da API

### Autenticação

- `POST /api/auth/register` - Registrar um novo usuário
- `POST /api/auth/login` - Autenticar usuário e obter token JWT

### Produtos

- `GET /api/products` - Listar todos os produtos
- `GET /api/products/:id` - Visualizar um produto específico
- `POST /api/products` - Criar um novo produto (requer autenticação de admin)
- `PUT /api/products/:id` - Atualizar um produto (requer autenticação de admin)
- `DELETE /api/products/:id` - Excluir um produto (requer autenticação de admin)

## Estrutura do Projeto

O projeto está organizado em uma estrutura modular:

```
src/
├── config/       # Configurações (banco de dados, etc.)
├── controllers/  # Controladores para as rotas
├── middleware/   # Middlewares (autenticação, etc.)
├── models/       # Modelos do banco de dados
├── routes/       # Definições de rotas
├── uploads/      # Diretório para uploads (se necessário)
└── index.ts      # Ponto de entrada da aplicação
```