

const Koa = require('koa');
const app = new Koa();
const port = 3000;
const Router = require('koa-router');
const router = new Router();
const bodyParser = require('koa-parser');
const _ = require('lodash');
app.use(bodyParser());

let posts = [
    {
        "id": "1",
        "name": "Nodejs Developer",
        "content": "asdasdasdasdas sdfsdfsdf"
    },
    {
        "id": "2",
        "name": "Nodejs Developer",
        "content": "asdasdasdasdas sdfsdfsdf"
    },
    {
        "id": "3",
        "name": "Nodejs Developer",
        "content": "asdasdasdasdas sdfsdfsdf"
    }
]

router.get('/', async ctx => {
    ctx.body = 'Welcome to Koa App'
})

router.get('/posts', async ctx => {
    ctx.body = posts;
})



router.post('/posts', ctx => {

    let { id, name, content } = ctx.request.body;

    posts.push({ id, name, content });
    ctx.body = posts;
    console.log(ctx.body);
})

router.get('/posts/:id', ctx => {
    ctx.body = posts.find(post => post.id === ctx.params.id)
})

router.delete('/posts/:id', ctx => {
    ctx.body = _.remove(posts, post => post.id === ctx.params.id)
    console.log(ctx.body);
})


router.put('/posts/:id', ctx => {

    let { id, name, content } = ctx.request.body;

    const index = posts.findIndex(post => post.id === ctx.params.id);

    if (id) {
        posts[index].id = id;
    }
    if (name) {
        posts[index].name = name;
    } if (content) {
        posts[index].content = name;
    }

    ctx.body = posts; 
})

app.use(router.routes());
app.listen(port);
console.log(` Sever is listening ${port}`)