const express = require("express");
const { Disciplina } = require("../models");
const LogAcesso = require("../models/LogAcesso");
const router = express.Router();

async function registrarLog(req, res, next) {
  await LogAcesso.create({ usuario: "testeUser", rotaAcessada: req.originalUrl });
  next();
}

// CRUD Disciplinas
router.post("/", registrarLog, async (req, res) => {
  try {
    const disciplina = await Disciplina.create(req.body);
    res.json(disciplina);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", registrarLog, async (req, res) => {
  const disciplinas = await Disciplina.findAll();
  res.json(disciplinas);
});

router.put("/:id", registrarLog, async (req, res) => {
  const disciplina = await Disciplina.findByPk(req.params.id);
  if (!disciplina) return res.status(404).json({ error: "Disciplina não encontrada" });
  await disciplina.update(req.body);
  res.json(disciplina);
});

router.delete("/:id", registrarLog, async (req, res) => {
  const disciplina = await Disciplina.findByPk(req.params.id);
  if (!disciplina) return res.status(404).json({ error: "Disciplina não encontrada" });
  await disciplina.destroy();
  res.json({ message: "Disciplina excluída" });
});

module.exports = router;
