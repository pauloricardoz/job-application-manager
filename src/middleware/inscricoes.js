const Joi = require('joi');

const inscricoesSchema = Joi.object({
  empresaId: Joi.number().strict().required()
    .messages({
      'any.type': 'empresaId tem que ser um número',
      'any.required': 'empresaId é obrigatorio ',
    }),
  dataInscricao: Joi.date().required(),
  dataRetorno: Joi.date(),
  status: Joi.string().required(),
});

const validationBody = (req, res, next) => {
  const { empresaId, dataInscricao, dataRetorno, status } = req.body;
  const isValid = inscricoesSchema.validate({
    empresaId, dataInscricao, dataRetorno, status, 
  });
  if (isValid.error) {
    return res.status(422).json({ message: isValid.error.message });
  }
  next();
};

module.exports = { validationBody };
