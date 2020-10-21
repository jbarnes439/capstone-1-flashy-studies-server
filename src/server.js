const knex = require('knex');
const app = require('./app');
const { PORT, NODE_ENV, DATABASE_URL } = require('./config');

// create knex instance. 
const db = knex({
  client: 'pg',
  connection: DATABASE_URL,
});

// set knex instance for use in routers.
app.set('db', db);

app.listen(PORT, () => {
  console.log(`Server running in ${NODE_ENV} mode at http://localhost:${PORT}`);
});

