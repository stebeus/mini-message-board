#! /usr/bin/env node

import { Client } from 'pg';

import { DATABASE } from '#root/constants.js';

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
	id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	user VARCHAR (10)
	message VARCHAR (1000)
	timestamp TIMESTAMP DEFAULT NOW()
);

INSERT INTO messages VALUES ('John Doe', "I'm gonna hack all users below me...");
`;

const populateModel = async () => {
	console.log('Seeding...');

	const client = new Client({ connectionString: DATABASE });

	await client.connect();
	await client.query(SQL);
	await client.end();

	console.log('Done');
};

populateModel();
