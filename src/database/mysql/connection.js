const mysql = require('mysql2/promise');
require('dotenv/config');

const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATA_BASE,
} = process.env;

const connection = mysql.createPool({
  host: DB_HOST || 'localhost',
  port: DB_PORT || 3306,
  user: DB_USER || 'root',
  password: DB_PASSWORD || 'password',
  database: DB_DATA_BASE || 'processos',
  
});

module.exports = connection;