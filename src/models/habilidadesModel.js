const Habilidades = require('../database/sequelize/models/habilidade');
const { extractValues } = require('../helper/sequelizeFunctions');

const getAll = async () => {
  const result = await Habilidades.findAll();
  return result.map(extractValues);
};

const getById = async (id) => {
  const result = await Habilidades.findByPk(id);
  return extractValues(result);
};

const create = async ({ name, level }) => {
  const result = await Habilidades.create({ name, level });
  return extractValues(result);
};

const update = async ({ level, name, id }) => {
  const result = await Habilidades.update({ level, name }, { where: { id } });
  return result;
};

const exclude = async (id) => {
  const result = await Habilidades.destroy({ where: { id } });
  return result;
};

module.exports = { getAll, getById, create, update, exclude };
