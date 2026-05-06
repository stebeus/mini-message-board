import { pool } from './pool.js';

export const getAllMessages = async () => {
	const { rows } = await pool.query('SELECT * FROM messages');
	return rows;
};

export const insertMessage = async (user, message) =>
	await pool.query('INSERT INTO messages (user, message) VALUES ($1)', [user, message]);
