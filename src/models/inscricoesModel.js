const { Inscricao, Empresa } = require('../database/sequelize/models/');

const getAll = async () => {
  const result = await Inscricao.findAll({
    include: { model: Empresa, as: 'empresa' },
  });
  return result;
};

const getById = async (id) => {
  const result = await Inscricao.findByPk(id);
  return result;
};

const create = async ({ empresaId, dataInscricao, dataRetorno, status }) => {
  const result = await Inscricao.create({
    empresaId,
    dataInscricao,
    dataRetorno,
    status,
  });
  return result;
};

const update = async ({
  empresaId,
  dataInscricao,
  dataRetorno,
  status,
  id,
}) => {
  const result = await Inscricao.update(
    { empresaId, dataInscricao, dataRetorno, status },
    { where: { id } },
  );
  return result;
};

const exclude = async (id) => {
  const result = await Inscricao.destroy({ where: { id } });
  return result;
};

module.exports = { getAll, getById, create, update, exclude };
