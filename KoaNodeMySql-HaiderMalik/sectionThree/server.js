const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const bodyParser = require('koa-parser');

const port = 3000;

app.use(bodyParser());


app.use(router.routes());
app.listen(port);
console.log(` Sever is listening ${port}`)