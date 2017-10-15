const database = require('../src/database');

database.initAsync()
  .then((res) => {
    console.log('Done');
    process.exit(0);
  })
  .catch((err) => {
    throw err;
  })