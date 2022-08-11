const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM habilidades');
  return result;
};

const create = async ({ name, level }) => {
  const [result] = await connection.execute(
    'INSERT INTO habilidades (name, level) VALUES (?, ?);',
    [name, level],
  );
  return { name, level, id: result.insertId };
};

module.exports = { getAll, create };
