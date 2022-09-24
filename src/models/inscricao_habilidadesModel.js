const { InscricaoHabilidade } = require('../database/sequelize/models/');
const { extractValues } = require('../helper/sequelizeFunctions');

const getAll = async () => {
  const result = await InscricaoHabilidade.findAll();
  return result;
};

const create = async ({ idInscricao, idHabilidade }) => {
  const result = await InscricaoHabilidade.create({
    idHabilidade,
    idInscricao,
  });
  if (result.affectedRows === 0) return null;
  return result;
};

const exclude = async (id) => {
  const result = await InscricaoHabilidade.destroy({ where: { id } });
  return result;
};

module.exports = { getAll, create, exclude };
