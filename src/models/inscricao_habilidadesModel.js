const inscricaoHabilidade = require('../database/sequelize/models/inscricao_habilidade');
const { extractValues } = require('../helper/sequelizeFunctions');

const getAll = async () => {
  const result = await inscricaoHabilidade.findAll();
  return result;
};

const create = async ({ idInscricao, idHabilidade }) => {
  const result = await inscricaoHabilidade.create({
    idHabilidade,
    idInscricao,
  });
  if (result.affectedRows === 0) return null;
  return result;
};

const exclude = async (id) => {
  const result = await inscricaoHabilidade.destroy({ where: { id } });
  return result;
};

module.exports = { getAll, create, exclude };
