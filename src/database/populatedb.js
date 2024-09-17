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

CREATE TABLE IF NOT EXISTS planlist (
  key INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  id VARCHAR ( 255 ),
  name VARCHAR ( 255 ),
  startterm VARCHAR ( 255 ),
  startyear VARCHAR ( 255 ),
  endterm VARCHAR ( 255 ),
  endyear VARCHAR ( 255 ),
  system VARCHAR ( 255 ),
  summer VARCHAR ( 255 ),
  defaultplan VARCHAR ( 255 ),
  userid VARCHAR ( 255 ),
  timecreated INTEGER
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