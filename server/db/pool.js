const { Pool } = require("pg");
require("dotenv").config({ quiet: true });

const pool = new Pool({
  connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:5432/${process.env.DB_NAME}`,
});

module.exports = pool;
