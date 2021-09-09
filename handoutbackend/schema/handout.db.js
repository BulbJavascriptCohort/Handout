const mysql = require("mysql");

function connect() {
  return mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: "handout",
  });
}

module.exports = { connect };
