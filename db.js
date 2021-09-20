const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: '1ndr4R4n1!',
    host: 'localhost',
    port: 5432,
    database: 'feiraonine'
});

module.exports = pool;