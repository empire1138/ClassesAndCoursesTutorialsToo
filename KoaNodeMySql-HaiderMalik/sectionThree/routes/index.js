const Router = require('koa-router');
const {companyControllers} = require('../controllers/company.controllers');
const router = new Router();

//define all the routes here
router.post('/companies', companyControllers.create)
router.get('/companies' ,companyControllers.find)
router.get('/companies/:id', companyControllers.find)
router.get('/companies/:id', companyControllers.destroy);



module.exports = router;