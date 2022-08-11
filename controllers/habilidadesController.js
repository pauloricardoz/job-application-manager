const habilidadesService = require('../services/habilidadesService');

const getAll = async (req, res, _next) => {
  try {
    const resultado = await habilidadesService.getAll();
    return res.status(200).json(resultado);
  } catch (error) {
    // next(error);
    console.log(error);
    res.status(500).json({ message: 'Algo deu erro. Desculpe!' });
  }
};

const create = async (req, res) => {
  try {
    const { name, level } = req.body;
    // if (name.length < 3) return res.status(422).json({ message: 'name < 3' });
    const resultado = await habilidadesService.create({ name, level });
    // if (resultado.isError) return res.status(422).json(resultado.message);
    return res.status(200).json(resultado);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Algo deu erro. Desculpe!' });
  }
};

module.exports = { getAll, create };
