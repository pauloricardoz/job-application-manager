const app = require('./api');

require('dotenv/config');

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`rodando na porta ${PORT}`));
