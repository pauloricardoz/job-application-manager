const express = require('express');
require('dotenv/config');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use('/empresas', routes.empresaRoute);
app.use('/habilidades', routes.habilidadesRoute);
app.use('/inscricoes', routes.inscricoesRoute);

// app.use((err, req, res, next) => {
//   if (err.message === 'connect ECONNREFUSED 127.0.0.1:3306') {
//     return res.status(500).json({ message: 'banco esta off' });
//   }
//   res.status(500).json({ message: 'Erro do middleware' });
// });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`rodando na porta ${PORT}`));
