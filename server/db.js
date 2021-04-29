const Pool = require("pg").Pool;

const pool = new Pool ({
  user: "dasha",
  password: "dasha",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;