const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM empresas');
  return result;
};

const getById = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM empresas WHERE id = ?;',
    [id],
  );
  return result[0];
};

const create = async ({ name }) => {
  const [result] = await connection.execute(
    'INSERT INTO empresas (name) VALUES (?);', [name],
  );
  return { name, id: result.insertId };
};

const update = async ({ name, id }) => {
  const [result] = await connection.execute(
    'UPDATE empresas SET name = ? WHERE id = ?;', [name, id],
  );
  return result;
};

const exclude = async (id) => {
  const [result] = await connection.execute(
    'DELETE FROM empresas WHERE id = ?;', [id],
  );
  return result;
};

module.exports = { getAll, getById, create, update, exclude };
