const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM inscricao_habilidades');
  return result;
};

const getById = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM inscricao_habilidades WHERE id = ?;',
    [id],
  );
  return result[0];
};

const create = async ({ idInscricao, idHabilidade }) => {
  const [result] = await connection.execute(
    `INSERT INTO inscricao_habilidades
    (id_inscricao, id_habilidade ) 
    VALUES (?, ?);`,
    [idInscricao, idHabilidade],
  );
  if (result.affectedRows === 0) return null;
  return { idInscricao, idHabilidade };
};

const exclude = async (id) => {
  const [result] = await connection.execute(
    'DELETE FROM inscricao_habilidades WHERE id_inscricao = ?;', [id],
  );
  return result;
};

module.exports = { getAll, getById, create, exclude };
