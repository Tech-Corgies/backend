require('dotenv').config();

const { PORT } = require('./config/index');

const app = require('./api/server');

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
