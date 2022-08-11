const habilidadesModel = require('../models/habilidadesModel');

const getAll = async () => habilidadesModel.getAll();
const create = async ({ level, name }) => {
  // if (name.length < 3) return {isError: true, message: 'name <3 '};
  // if (level.length < 3) return {isError: true, message: 'level <3 '};

  const resultado = await habilidadesModel.create({ level, name });
  return resultado;
};

module.exports = { getAll, create };
