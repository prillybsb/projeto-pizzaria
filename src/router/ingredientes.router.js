const router = require("express").Router();
const ingredienteController = require("../controller/ingrediente.controller");
const authMiddleware = require("../middleware/auth.middleware");
const {
  validaIdParams,
  validaIngrediente,
} = require("../middleware/validacao.middleware");
