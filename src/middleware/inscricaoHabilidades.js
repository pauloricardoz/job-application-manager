const Joi = require('joi');

const inscricoesHabilidadesSchema = Joi.object({
  idInscricao: Joi.number().strict().required()
    .messages({
      'any.type': 'idInscricao tem que ser um número',
      'any.required': 'idInscricao é obrigatorio ',
    }),
  idHabilidade: Joi.number().strict().required()
    .messages({
      'any.type': 'idHabilidade tem que ser um número',
      'any.required': 'idHabilidade é obrigatorio ',
    }),
});

const validationBody = (req, res, next) => {
  const { idInscricao, idHabilidade } = req.body;
  const isValid = inscricoesHabilidadesSchema.validate({
    idInscricao, idHabilidade, 
  });
  if (isValid.error) {
    return res.status(422).json({ message: isValid.error.message });
  }
  next();
};

module.exports = { validationBody };
