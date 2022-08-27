const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM inscricoes');
  return result;
};

const getById = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM inscricoes WHERE id = ?;',
    [id],
  );
  return result[0];
};

const create = async ({ empresaId, dataInscricao, dataRetorno, status }) => {
  const [result] = await connection.execute(
    `INSERT INTO inscricoes
    (empresa_id, data_inscricao, data_retorno,status ) 
    VALUES (?, ?, ?, ?);`,
    [empresaId, dataInscricao, dataRetorno, status],
  );
  return { empresaId, dataInscricao, dataRetorno, status, id: result.insertId };
};

const update = async ({ empresaId, dataInscricao, dataRetorno, status, id }) => {
  const [result] = await connection.execute(
    `UPDATE inscricoes 
    SET empresa_id = ?, data_inscricao = ?, data_retorno = ?, status = ? 
    WHERE id = ?;`, 
    [empresaId, dataInscricao, dataRetorno, status, id],
  );
  return result;
};

const exclude = async (id) => {
  const [result] = await connection.execute(
    'DELETE FROM inscricoes WHERE id = ?;', [id],
  );
  return result;
};

module.exports = { getAll, getById, create, update, exclude };
