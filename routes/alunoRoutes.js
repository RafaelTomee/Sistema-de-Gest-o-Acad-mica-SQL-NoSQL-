const express = require("express");
const { Aluno, Disciplina } = require("../models");
const LogAcesso = require("../models/LogAcesso");
const router = express.Router();

// Middleware de log
async function registrarLog(req, res, next) {
  await LogAcesso.create({ usuario: "testeUser", rotaAcessada: req.originalUrl });
  next();
}

// CRUD Alunos
router.post("/", registrarLog, async (req, res) => {
  try {
    const aluno = await Aluno.create(req.body);
    res.json(aluno);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", registrarLog, async (req, res) => {
  const alunos = await Aluno.findAll();
  res.json(alunos);
});

router.put("/:id", registrarLog, async (req, res) => {
  try {
    const aluno = await Aluno.findByPk(req.params.id);
    if (!aluno) return res.status(404).json({ error: "Aluno não encontrado" });
    await aluno.update(req.body);
    res.json(aluno);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", registrarLog, async (req, res) => {
  const aluno = await Aluno.findByPk(req.params.id);
  if (!aluno) return res.status(404).json({ error: "Aluno não encontrado" });
  await aluno.destroy();
  res.json({ message: "Aluno excluído" });
});

// Matricular aluno em disciplinas
router.post("/:id/matricular", registrarLog, async (req, res) => {
  const aluno = await Aluno.findByPk(req.params.id);
  if (!aluno) return res.status(404).json({ error: "Aluno não encontrado" });

  await aluno.addDisciplinas(req.body.disciplinaIds); // { "disciplinaIds": [1,2] }
  res.json({ message: "Matrícula realizada com sucesso" });
});

router.get("/:id/disciplinas", registrarLog, async (req, res) => {
  const aluno = await Aluno.findByPk(req.params.id, { include: Disciplina });
  if (!aluno) return res.status(404).json({ error: "Aluno não encontrado" });
  res.json(aluno.Disciplinas);
});

module.exports = router;
