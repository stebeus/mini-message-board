import { getAllMessages } from '#root/models/queries.js';

export const getMessages = async (req, res) => {
	const messages = await getAllMessages();
	res.render('index', { title: null, messages });
};
