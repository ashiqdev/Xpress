const app = require('./app');
const { connectWithDb } = require('./helpers/db-helper');

const { PORT } = process.env;

app.set('port', PORT || 7777);

const server = app.listen(app.get('port'), () => {
  connectWithDb();
  console.log(`Express running → PORT ${server.address().port}`);
});
