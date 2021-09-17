//connect database with our server

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "piedelimon96",
  host: "localhost",
  port: "5432",
  database: "perntodo",
});

module.exports = pool;
