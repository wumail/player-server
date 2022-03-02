
require('module-alias/register');
const express = require('express');
const netease_Router = require('./netease/index.js');
const user_Router = require('./user/index.js');

const app = express()
const port = 3030;

const cluster = require("cluster")
const fs = require("fs")
const os = require("os")

if (cluster.isMaster) {
    console.log("master" + process.pid + "正在运行")
    const cpus = os.cpus().length
    for (let i = 0; i < cpus; i++) {
        cluster.fork()
    }
    cluster.on("exit", (worker, code, signal) => {
        console.log("工作进程" + worker.process.pid + "已退出")
    })
} else {
    // const app = express()
    const pid = process.pid

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
    //app.use('/qq',qqRouter)

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port},工作进程${cluster.worker.process.pid} is runing`)
    })

}


module.exports = app;