const mongoose = require("mongoose");

const LogAcessoSchema = new mongoose.Schema({
  usuario: { type: String, required: true },
  rotaAcessada: { type: String, required: true },
  dataHora: { type: Date, default: Date.now }
});

module.exports = mongoose.model("LogAcesso", LogAcessoSchema);
