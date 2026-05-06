export const getNewMessage = (req, res) => {
	res.render('new-message', { title: 'New message' });
};

export const postNewMessage = (req, res) => {
	res.redirect('/');
};
