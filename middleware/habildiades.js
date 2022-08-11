const Joi = require('joi');

const habilidadeSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.min': 'Name tem que ser maior que 3',
    'string.max': 'Name tem que ser menor que 20',
    'any.required': 'Name é obrigatorio ',
  }),
  level: Joi.string().min(4).max(20).required(),
});
const validacao = (req, res, next) => {
  const { name, level } = req.body;
  const isValid = habilidadeSchema.validate({ name, level });
  console.log(isValid.error.details);
  if (isValid.error) {
    return res.status(422).json({ message: isValid.error.message });
  }
  next();
};

module.exports = { validacao };
