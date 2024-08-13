Desafio Técnico Full Stack - Orquestre

Este repositório contém a solução para o desafio técnico Full Stack, que inclui a implementação de um back-end com API em TypeScript e um front-end em React. A aplicação permite a criação, leitura, atualização e exclusão de usuários, com autenticação por email e senha.

Tecnologias Utilizadas

Back-End
Node.js com Express
TypeScript
Prisma ORM (com PostgreSQL)
JWT para autenticação
Swagger para documentação da API
Front-End
React com TypeScript
Zustand para gerenciamento de estado
Styled-Components para estilização
Configuração do Ambiente

Pré-requisitos
Node.js (v14 ou superior)
PostgreSQL
Git

1. Configuração do Back-End
Clone o repositório:

git clone https://github.com/seu-usuario/desafio-fullstack.git
cd desafio-fullstack/backend
Instale as dependências:
 
npm install
Configure o banco de dados PostgreSQL:
Crie um banco de dados no PostgreSQL.
Renomeie o arquivo .env.example para .env e configure a variável DATABASE_URL:
env
 
DATABASE_URL="postgresql://seu-usuario:senha@localhost:5432/nome-do-banco"
Configure o Prisma:

npx prisma migrate dev --name init
npx prisma generate
Execute o servidor:

npm run dev
O servidor estará rodando em http://localhost:3000.
2. Configuração do Front-End
Navegue para o diretório do front-end:

cd ../frontend
Instale as dependências:

npm install
Execute o front-end:

npm start
A aplicação estará disponível em http://localhost:3001.
3. Deploy
3.1 Deploy do Back-End

Heroku:
Instale a CLI do Heroku e faça login:

heroku login
Crie uma nova aplicação:

heroku create nome-da-app
Adicione a variável de ambiente DATABASE_URL no Heroku:

heroku config:set DATABASE_URL="postgresql://seu-usuario:senha@localhost:5432/nome-do-banco"
Faça o deploy:

git push heroku main
Acesse a aplicação:

heroku open
3.2 Deploy do Front-End

Vercel ou Netlify:
Faça login na plataforma escolhida.
Crie um novo projeto a partir do seu repositório GitHub.
Configure as variáveis de ambiente, se necessário.
Realize o deploy.
Uso da Aplicação

Rotas da API
POST /api/register: Registra um novo usuário.
POST /api/login: Autentica o usuário e retorna um token JWT.
GET /api/users: Retorna a lista de usuários (requer autenticação).
GET /api/users/:id: Retorna um usuário específico pelo ID (requer autenticação).
PUT /api/users/:id: Atualiza um usuário específico (requer autenticação).
DELETE /api/users/:id: Deleta um usuário específico (requer autenticação).
A documentação completa da API está disponível em /api-docs.

Funcionalidades do Front-End
Login: Os usuários podem fazer login usando suas credenciais.
Dashboard: Após o login, os usuários podem visualizar, adicionar, editar e excluir outros usuários.
Estrutura de Diretórios
 
desafio-fullstack/
│
├── backend/
│   ├── prisma/             # Configuração do Prisma e migrações
│   ├── src/
│   │   ├── middleware/     # Middleware de autenticação
│   │   ├── routes/         # Rotas da API (CRUD e autenticação)
│   │   ├── server.ts       # Configuração do servidor Express
│   │   └── swagger.ts      # Configuração do Swagger
│   └── tsconfig.json       # Configuração do TypeScript
│
├── frontend/
│   ├── public/             # Arquivos públicos
│   ├── src/
│   │   ├── store/          # Configuração do Zustand
│   │   ├── styles/         # Estilização com Styled-Components
│   │   ├── App.tsx         # Componente principal
│   │   └── index.tsx       # Ponto de entrada do React
│   └── tsconfig.json       # Configuração do TypeScript
└── README.md               # Instruções detalhadas do projeto
Boas Práticas

Commits: Os commits foram organizados por feature, seguindo uma linha do tempo lógica.
Documentação: Toda a API foi documentada usando Swagger.
Tratamento de Erros: O back-end e o front-end têm tratamento de erros adequados, com mensagens claras para o usuário.
Estilização: O front-end foi estilizado seguindo as boas práticas de design responsivo, utilizando styled-components.
Considerações Finais

Este projeto foi desenvolvido como parte de um desafio técnico para a posição de desenvolvedor Full Stack. Caso tenha dúvidas ou sugestões, sinta-se à vontade para entrar em contato.