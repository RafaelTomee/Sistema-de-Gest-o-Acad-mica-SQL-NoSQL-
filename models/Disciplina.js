const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Disciplina = sequelize.define("Disciplina", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  cargaHoraria: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = Disciplina;

