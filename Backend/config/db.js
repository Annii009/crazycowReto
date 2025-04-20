const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'example',
  password: process.env.DB_PASSWORD || 'example',
  database: process.env.DB_NAME || 'example_db'
});

module.exports = pool;
