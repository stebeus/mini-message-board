import { insertMessage } from '#root/models/queries.js';

export const getNewMessage = (req, res) => {
	res.render('new-message', { title: 'New message' });
};

export const postNewMessage = async (req, res) => {
	const { username, message } = req.body;
	await insertMessage(username, message);
	res.redirect('/');
};
