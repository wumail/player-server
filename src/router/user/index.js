const express = require('express');
const userController = require('@c/userController.js');
const router = express.Router();
const crypto = require('crypto');


router.post('/login', function (req, res) {
    let request = req.body;
    if (request.username && request.password) {
        userController.select({
            username: request.username,
            password: request.password
        }).exec().then((result) => {
            if (result) {
                res.json({
                    status: 200,
                    body: {
                        data: {
                            username: result.username,
                            net163_nickname: result.net163_nickname,
                            net163_usercookie: result.net163_usercookie,
                            net163_userid: result.net163_userid,
                            net163_username: result.net163_username,
                        },
                        login_flag: true,
                        message: '登录成功'
                    }
                })
            } else {
                console.log(result);
                res.json({
                    status: 200,
                    data: {
                        login_flag: false,
                        message: '登录失败，请检查账号或密码是否有误'
                    }
                })
            }
        })
    } else {
        res.status(404).send('请检查是否传入数据无误');
    }
})


router.post('/register', function (req, res) {
    let request = req.body;
    if (request.username && request.password) {
        userController.select({
            username: request.username,
        }).exec().then((result) => {
            if (!result) {
                userController.insert({
                    username: request.username,
                    password: request.password
                })
                res.json({
                    status: 200,
                    data: {
                        username: request.username,
                        register_flag: true,
                        message: '注册成功，请重新登录'
                    }
                })

            } else {
                res.json({
                    status: 200,
                    data: {
                        register_flag: false,
                        message: '账号已存在'
                    }
                })
            }
        })
    } else {
        res.status(404).send('请检查是否传入数据无误');
    }
})

module.exports = router
