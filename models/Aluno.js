const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Aluno = sequelize.define("Aluno", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  matricula: { type: DataTypes.STRING, unique: true, allowNull: false },
  curso: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Aluno;
