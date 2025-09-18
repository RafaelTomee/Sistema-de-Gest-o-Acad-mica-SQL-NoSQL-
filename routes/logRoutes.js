const express = require("express");
const LogAcesso = require("../models/LogAcesso");
const router = express.Router();

// Listar logs com paginação
router.get("/", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const logs = await LogAcesso.find()
    .skip((page - 1) * limit)
    .limit(parseInt(limit))
    .sort({ dataHora: -1 });
  res.json(logs);
});

module.exports = router;
