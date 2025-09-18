# Sistema-de-Gest-o-Acad-mica-SQL-NoSQL-

Este projeto foi desenvolvido como Atividade Integradora e tem como objetivo demonstrar a integração entre:

Um banco relacional (SQLite via Sequelize) para gerenciar alunos e disciplinas.

Um banco não relacional (MongoDB Atlas via Mongoose) para registrar logs de acessos às rotas.

🚀 Funcionalidades

CRUD de Alunos (criar, listar, editar, excluir)

CRUD de Disciplinas (criar, listar, editar, excluir)

Relacionamento N:N (alunos matriculados em várias disciplinas)

Registro de Logs de Acesso em MongoDB (usuário fictício, rota acessada, data/hora)


⚙️ Como rodar o projeto
1. Clonar o repositório
git clone https://github.com/seu-usuario/sistema-gestao-academica.git
cd sistema-gestao-academica

2. Instalar dependências
npm install

3. Configurar variáveis de ambiente (.env)
# Banco relacional (SQLite)
DB_DIALECT=sqlite
DB_STORAGE=./database.sqlite

# Banco não relacional (MongoDB Atlas)
MONGO_URI=mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/web2_db
PORT=3000

4. Rodar o servidor
node app.js


Servidor rodando em:

http://localhost:3000

📌 Exemplos de Rotas
🔹 Alunos

POST /alunos → Criar aluno

{
  "nome": "Rafael da Silva",
  "matricula": "2025001",
  "curso": "Engenharia de Software"
}


GET /alunos → Listar alunos

PUT /alunos/:id → Atualizar aluno

DELETE /alunos/:id → Remover aluno

POST /alunos/:id/matricular → Matricular aluno em disciplinas

🔹 Disciplinas

POST /disciplinas → Criar disciplina

GET /disciplinas → Listar disciplinas

PUT /disciplinas/:id → Atualizar disciplina

DELETE /disciplinas/:id → Remover disciplina

🔹 Logs

GET /logs → Listar logs de acessos registrados no MongoDB

✅ Resultado Esperado

Alunos e Disciplinas sendo salvos no SQLite (Sequelize)

Logs de acessos sendo salvos no MongoDB Atlas (Mongoose)

API organizada, com separação em camadas (config, models, routes, app.js)
