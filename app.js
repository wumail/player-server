
require('module-alias/register');
const express = require('express');
const netease_Router = require('./src/router/netease/index.js');
const qqmusic_Router = require('./src/router/qqmusic/index');
const user_Router = require('./src/router/user/index.js');

const app = express()
const port = 3030;

// const cluster = require("cluster")
const fs = require("fs")
const os = require("os")

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    next()
})

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded  
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json  
app.use(bodyParser.json())
//usr api
app.use('/user', user_Router)
//网易云api
app.use('/net163', netease_Router)
//qq音乐api
app.use('/qq',qqmusic_Router)

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.send(`Hello World!`);
    // console.log(`${cluster.worker.process.pid}`);
})
