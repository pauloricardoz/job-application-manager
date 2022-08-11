const express = require('express');
require('dotenv/config');

const routes = require('./routes');

const app = express();

app.use('/empresas', routes.empresaRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`rodando na porta ${PORT}`));

// https://www.themealdb.com/api/json/v1/1/search?s=Arrabiata
// https://opentdb.com/api.php?amount=1 