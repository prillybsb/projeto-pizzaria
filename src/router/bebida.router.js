const router = require("express").Router();
const bebidaController = require("../controller/bebida.controller");
const authMiddleware = require("../middleware/auth.middleware");
const {
  validaBebida,
  validaIdParams,
} = require("../middleware/validacao.middleware");
