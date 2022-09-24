const Empresa = require('./empresa');
const Habilidade = require('./habilidade');
const Inscricao = require('./inscricao');
const InscricaoHabilidade = require('./inscricao_habilidade');

Inscricao.belongsTo(Empresa, { foreignKey: 'empresaId', as: 'empresa' });

Inscricao.belongsToMany(Habilidade, {
  foreignKey: 'idInscricao',
  as: 'habilidade',
  otherKey: 'idHabilidade',
  through: InscricaoHabilidade,
});

Habilidade.belongsToMany(Habilidade, {
  foreignKey: 'idHabilidade',
  as: 'inscricao',
  otherKey: 'idInscricao',
  through: InscricaoHabilidade,
});

module.exports = {
  Empresa,
  Habilidade,
  Inscricao,
  InscricaoHabilidade,
};
