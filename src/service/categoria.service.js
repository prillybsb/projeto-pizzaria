const Categoria = require("../model/Categoria");

const createCategoriaService = (body) => {
  return Categoria.create(body);
};
const findByIdCategoriaService = (id) => {
  return Categoria.findById(id);
};
const findAllCategoriaService = (limit, offset) => {
  return Categoria.find().limit(limit).skip(offset);
};
const updateCategoriaService = (id, body) => {
  return Categoria.findByIdAndUpdate(id, body, { returnDocument: "after" });
};
const deleteCategoriaService = (id) => {
  return Categoria.findByIdAndRemove(id);
};

module.exports = {
  createCategoriaService,
  findByIdCategoriaService,
  findAllCategoriaService,
  updateCategoriaService,
  deleteCategoriaService,
};
