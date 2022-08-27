const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM habilidades');
  return result;
};

const getById = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM habilidades WHERE id = ?;',
    [id],
  );
  return result[0];
};

const create = async ({ name, level }) => {
  const [result] = await connection.execute(
    'INSERT INTO habilidades (name, level) VALUES (?, ?);',
    [name, level],
  );
  return { name, level, id: result.insertId };
};

const update = async ({ level, name, id }) => {
  const [result] = await connection.execute(
    'UPDATE habilidades SET name = ?, level = ? WHERE id = ?;', [name, level, id],
  );
  return result;
};

const exclude = async (id) => {
  const [result] = await connection.execute(
    'DELETE FROM habilidades WHERE id = ?;', [id],
  );
  return result;
};

module.exports = { getAll, getById, create, update, exclude };
