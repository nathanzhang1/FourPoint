#! /usr/bin/env node

import pkg from 'pg';
const { Client } = pkg;
import "dotenv/config";

const SQL = `
CREATE TABLE IF NOT EXISTS degreeplan (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  key INTEGER,
  name VARCHAR ( 255 ),
  professor VARCHAR ( 255 ),
  grade VARCHAR ( 255 ),
  units VARCHAR ( 255 ),
  term VARCHAR ( 255 ),
  plan VARCHAR ( 255 )
);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.PG_ROLE_NAME}:${process.env.PG_ROLE_PASSWORD}@localhost:5432/fourpoint`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();