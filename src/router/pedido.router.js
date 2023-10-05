const router = require("express").Router();
const pedidoController = require("../controller/pedido.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/create", authMiddleware, pedidoController.createPedidoController);
