const Category = require('./model/category');
const Comment = require('./model/comment');
const User = require('./model/user');
const Event = require('./model/event');

const auth = require('./config/auth')(User);

const userCtrl = require('./controllers/user')(User);
const categoryCtrl = require('./controllers/category')(Category);
const eventCtrl = require('./controllers/event')(Event);
const commentCtrl = require('./controllers/comment')(Comment);

module.exports = function(router){
	router.route('/users')
		.get(userCtrl.getAll)
		.post(userCtrl.save);
	router.get('/me', auth.isAuthenticated, userCtrl.me);
	router.post('/login', userCtrl.login);

	router.get('/test', function(req, res){
		res.json({message: 'Hello world!'});
	});

	router.route('/categories')
        .get(auth.isAuthenticated, categoryCtrl.findAll)
        .get(auth.isAdmin, categoryCtrl.save);

	router.route('/events')
		.get(auth.isAuthenticated, eventCtrl.findAll)
		.post(auth.isAuthenticated, eventCtrl.save);

	router.get('/events/:event/comments', auth.isAuthenticated, commentCtrl.findByEvent);

	router.route('/comments')
		.post(auth.isAuthenticated, commentCtrl.save);
};
