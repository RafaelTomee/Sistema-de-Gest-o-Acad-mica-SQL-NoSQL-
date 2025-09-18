require("dotenv").config();
const express = require("express");
const { sequelize } = require("./models");
const connectMongo = require("./config/db_mongoose");

const alunoRoutes = require("./routes/alunoRoutes");
const disciplinaRoutes = require("./routes/disciplinaRoutes");
const logRoutes = require("./routes/logRoutes");

const app = express();
app.use(express.json());

// Rotas
app.use("/alunos", alunoRoutes);
app.use("/disciplinas", disciplinaRoutes);
app.use("/logs", logRoutes);

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await sequelize.sync(); // cria tabelas no SQLite
    await connectMongo(); // conecta no Mongo Atlas
    app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
  } catch (err) {
    console.error("Erro ao iniciar:", err);
  }
}

start();
