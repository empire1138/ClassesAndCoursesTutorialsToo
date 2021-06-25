const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: "Welcome to the API"
    });
})

app.post('/api/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secrectkey', (err, authData))
    if (err) {
        res.sendStatus(403);
    } else {
        res.json({
            msg: "Post Made...",
            authData
        });
    }


})

app.post('/api/login', (req, res) => {
    //Mock User
    const user = {
        id: 1,
        username: "fakename",
        email: 'fake@email.com'
    }

    jwt.sign({ user: user }, 'secrectkey', {expires: '30s'}, (err, token) => {
        res.json({
            token: token
        })
    });
})


//Format of TOken Auth: Beaer acccess token

//Verify Token
function verifyToken(req, res, next) {
    const bearHeader = req.headers['authorization'];

    if (typeof bearHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken
        next();
    } else {
        res.sendStatus(403);
    }
}

app.listen(5000, () => console.log('server stated on port 5000'));
