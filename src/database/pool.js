import pkg from 'pg';
const { Pool } = pkg;
import "dotenv/config";

export const pool = new Pool({
    host: "localhost",
    user: process.env.PG_ROLE_NAME,
    database: "fourpoint",
    password: process.env.PG_ROLE_PASSWORD,
    port: 5432,
  });
			
