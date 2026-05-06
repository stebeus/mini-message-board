import { pool } from './pool.js';

export const getAllMessages = async () => {
	const { rows } = await pool.query('SELECT * FROM messages');
	return rows;
};

export const insertMessage = async (username, message) =>
	await pool.query('INSERT INTO messages (username, message) VALUES ($1, $2)', [username, message]);
