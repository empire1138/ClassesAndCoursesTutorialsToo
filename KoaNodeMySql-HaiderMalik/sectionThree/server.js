const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const bodyParser = require('koa-parser');
const _= require('lodash');

const router = require('./routes/index')

const port = 3000;

app.use(bodyParser());

const db = require('./models/index');
db.sequelize.sync()
    .then(() => console.log('models synced'))
    .catch(err => console.log(err));

app.context.db = db;
app.use(router.routes());
app.listen(port);
console.log(` Sever is listening ${port}`)