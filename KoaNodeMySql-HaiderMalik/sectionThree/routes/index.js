const Router = require('koa-router');
const applicationController = require('../controllers/application.controller');
const companyControllers = require('../controllers/company.controllers');
const jobController = require('../controllers/job.controller');
const userController = require('../controllers/user.controller');
const isAuthenticated = require('../polices/isAuthenticated');

const router = new Router();

//define all the routes here
router.post('/companies',isAuthenticated, companyControllers.create)
router.get('/companies' ,isAuthenticated, companyControllers.find)
router.get('/companies/:id',isAuthenticated, companyControllers.find)
router.get('/companies/:id',isAuthenticated, companyControllers.destroy);
router.put('/companies/:id',isAuthenticated, companyControllers.update);

//Jobs
router.post('/jobs',isAuthenticated, jobController.create);
router.get('/jobs',isAuthenticated, jobController.find);

//App
router.post('/application',isAuthenticated, applicationController.create)

//User
router.post('/signup', userController.signup);
router.post('/login', userController.login);

module.exports = router;