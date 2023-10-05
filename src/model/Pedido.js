const mongoose = require("mongoose");

const PedidoSchema = new mongoose.Schema({
  pizzas: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "pizzas",
      },
      quantidade: { type: Number, required: true },
    },
  ],
  bebidas: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "bebidas",
      },
      quantidade: { type: Number, required: true },
    },
  ],
});
