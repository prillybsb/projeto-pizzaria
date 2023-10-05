const router = require("express").Router();
const categoriaController = require("../controller/categoria.controller");
const authMiddleware = require("../middleware/auth.middleware");
const {
  validaCategoria,
  validaIdParams,
} = require("../middleware/validacao.middleware");
