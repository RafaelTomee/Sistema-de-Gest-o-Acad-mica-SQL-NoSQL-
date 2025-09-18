const sequelize = require("../config/db");
const Aluno = require("./Aluno");
const Disciplina = require("./Disciplina");

// Relacionamento N:N
Aluno.belongsToMany(Disciplina, { through: "AlunoDisciplinas" });
Disciplina.belongsToMany(Aluno, { through: "AlunoDisciplinas" });

module.exports = { sequelize, Aluno, Disciplina };

