const express = require('express');
require('dotenv/config');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use('/empresas', routes.empresaRoute);
app.use('/habilidades', routes.habilidadesRoute);
app.use('/inscricoes', routes.inscricoesRoute);
app.use('/inscricao-habilidades', routes.inscricaoHabilidadesRoute);

module.exports = app;
