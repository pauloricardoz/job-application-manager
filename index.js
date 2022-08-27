const express = require('express');
require('dotenv/config');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use('/empresas', routes.empresaRoute);
app.use('/habilidades', routes.habilidadesRoute);
app.use('/inscricoes', routes.inscricoesRoute);
app.use('/inscricao-habilidades', routes.inscricaoHabilidadesRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`rodando na porta ${PORT}`));
