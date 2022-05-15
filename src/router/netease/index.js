
const express = require('express');
const userController = require('../../controller/userController');
const router = express.Router();
const { login_cellphone,
    song_url,
    playlist_detail,
    playlist_track_all,
    user_playlist,
    user_detail,
    search,
    check_music,
    mv_detail,
    mv_url,
    lyric,
    search_hot_detail,
    search_hot,
    song_detail,
    top_song
} = require('NeteaseCloudMusicApi')

//18190004277 wsad241241
// async function userLogin({ username, phone, password }) {
//     try {
//         const result = await login_cellphone({
//             phone,
//             password
//         })
//         // console.log(result.body)
//         const data = result.body;
//         const queryData = {
//             net163_username: data.account.userName,
//             net163_userid: `${data.account.id}`,
//             net163_usercookie: data.cookie,
//         }
//         const ifexist = userController.select(
//             {
//                 username: username,
//             }
//         )
//         ifexist.exec().then((result) => {
//             // console.log(result);
//             // console.log(queryData);
//             // Prints "Space Ghost is a talk show host."
//             if (result) {
//                 userController.update(
//                     result,
//                     queryData
//                 )
//             }
//         }).catch((err) => {
//             console.log(err);
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

/*
let request = req.body;
if (request.id) {

} else {
    res.status(404).send('请检查是否传入数据无误');
}
*/
router.get("/", function (req, res, next) {
    const data = {
        code: 200,
        msg: "OK",
        data: "Hello Node Server"
    };
    res.json(data);
})

router.post('/login', async function (req, res, next) {
    // console.log(req);
    // let request = req.body;
    // console.log(request);
    let { username, phone, password } = req.body;
    if (username && phone && password) {
        try {
            const result = await login_cellphone({
                phone,
                password
            })
            // console.log(result.body.token)
            // { msg: '密码错误', code: 502, message: '密码错误' }
            /*
            {
                loginType: 1,
                code: 200,
                account: {
                    id: 1487461780,
                    userName: '1_13722093265',
                    type: 1,
                    status: 0,
                    whitelistAuthority: 0,
                    createTime: 1528905406398,
                    salt: '[B@247c6cd5',
                    tokenVersion: 0,
                    ban: 0,
                    baoyueVersion: -2,
                    donateVersion: 0,
                    vipType: 0,
                    viptypeVersion: 1582475076639,
                    anonimousUser: false
                },
                token: 'dbcc39296c2e7eba9c6d063ef82fb2522b1291d054acbedb7c12663acec9124433a649814e309366',
                profile: {
                    followed: false,
                    backgroundUrl: 'https://p3.music.126.net/_f8R60U9mZ42sSNvdPn2sQ==/109951162868126486.jpg',
                    detailDescription: '',
                    backgroundImgIdStr: '109951162868126486',
                    userId: 1487461780,
                    userType: 0,
                    vipType: 0,
                    gender: 1,
                    accountStatus: 0,
                    expertTags: null,
                    experts: {},
                    backgroundImgId: 109951162868126480,
                    nickname: 'chihw',
                    avatarImgId: 109951164001355140,
                    defaultAvatar: false,
                    djStatus: 0,
                    birthday: 947088000000,
                    province: 150000,
                    city: 152500,
                    authStatus: 0,
                    mutual: false,
                    remarkName: null,
                    avatarUrl: 'https://p4.music.126.net/gW_G-XwZ8CaEQdxo3QKjsA==/109951164001355133.jpg',
                    avatarImgIdStr: '109951164001355133',
                    description: '',
                    signature: '⚡️ Never change',
                    authority: 0,
                    avatarImgId_str: '109951164001355133',
                    followeds: 4,
                    follows: 6,
                    eventCount: 0,
                    avatarDetail: null,
                    playlistCount: 3,
                    playlistBeSubscribedCount: 0
                },
                bindings: [
                    {
                    refreshTime: 1528905406,
                    url: '',
                    userId: 1487461780,
                    expired: false,
                    tokenJsonStr: '{"countrycode":"","cellphone":"13722093265","hasPassword":true}',
                    bindingTime: 1528905406399,
                    expiresIn: 2147483647,
                    id: 6610575491,
                    type: 1
                    },
                    {
                    refreshTime: 1593747743,
                    url: 'http://weibo.com/u/5666278813',
                    userId: 1487461780,
                    expired: true,
                    tokenJsonStr: '{"is_teenager":0,"allow_all_act_msg":false,"favourites_count":2,"urank":4,"verified_trade":"","weihao":"","verified_source_url":"","province":"15","screen_name":"Chihw_","id":5666278813,"geo_enabled":true,"like_me":false,"special_follow":false,"like":false,"verified_type":-1,"access_token":"2.00lxHTLG0Gg461c02ca07e99u_Ub8C","pagefriends_count":1,"domain":"","following":false,"name":"Chihw_","cover_image_phone":"http://ww1.sinaimg.cn/crop.0.0.640.640.640/549d0121tw1egm1kjly3jj20hs0hsq4f.jpg","idstr":"5666278813","follow_me":false,"friends_count":51,"credit_score":80,"gender":"m","city":"25","profile_url":"u/5666278813","description":"⚡️  Never change","created_at":"Sat Aug 01 23:47:02 +0800 2015","remark":"","ptype":0,"verified_reason_url":"","block_word":0,"
                uid":"5666278813","avatar_hd":"https://tva3.sinaimg.cn/crop.0.0.100.100.1024/006bt7XLjw8eunjo4vk0yj302s02st8j.jpg?KID=imgbed,tva&Expires=1593758543&ssig=J16GM%2B280D","video_play_count":0,"mbtype":0,"bi_followers_count":7,"scope":"follow_app_official_microblog","user_ability":2097152,"is_teenager_list":0,"verified_reason":"","story_read_state":-1,"video_status_count":0,"mbrank":0,"lang":"zh-cn","expires_in":2607579,"class":1,"remind_in":"2607579","email":"","star":0,"allow_all_comment":true,"online_status":0,"verified":false,"profile_image_url":"https://tva3.sinaimg.cn/crop.0.0.100.100.50/006bt7XLjw8eunjo4vk0yj302s02st8j.jpg?KID=imgbed,tva&Expires=1593758543&ssig=sUcsyE9n5G","block_app":0,"pc_new":0,"url":"","avatar_large":"https://tva3.sinaimg.cn/crop.0.0.100.100.180/006bt7XLjw8eunjo4vk0yj302s02st8j.jpg?KID=imgbed,tva&Expires=1593758543&ssig=b18pniAIsX","planet_video":0,"statuses_count":0,"vclub_member":0,"followers_count":20,"is_guardian":0,"location":"内蒙古 锡林郭勒盟","isRealName":"true","insecurity":{"sexual_content":false},"verified_source":"","video_mark":0,"live_status":0}',      
                    type: 2
                    }
                ],
                cookie: 'NMTID=00O2-X-ujmdmVUaDkQKvG2b4PYqfuoAAAF6cIoSxg; Max-Age=315360000; Expires=Wed, 2 Jul 2031 08:02:14 GMT; Path=/;;__remember_me=true; Max-Age=1296000; Expires=Mon, 19 Jul 2021 08:02:14 GMT; Path=/;;__csrf=e138cd6874a397acec58c6d0ddf01999; Max-Age=1296010; Expires=Mon, 19 Jul 2021 08:02:24 GMT; Path=/;;MUSIC_U=dbcc39296c2e7eba9c6d063ef82fb2522b1291d054acbedb7c12663acec9124433a649814e309366; Max-Age=1296000; Expires=Mon, 19 Jul 2021 08:02:14 GMT; Path=/;'      
                }
            */
            // if()
            const data = result.body;
            if (data.code == 502) {
                res.json({
                    status: 200,
                    data: {
                        flag: false,
                        message: data.message
                    }
                })
                return false;
            }
            const queryData = {
                net163_nickname: data.profile.nickname,
                net163_username: data.account.userName,
                net163_userid: `${data.account.id}`,
                net163_usercookie: data.cookie,
                net163_token: data.token
            }
            const ifexist = userController.select(
                {
                    username,
                }
            )
            ifexist.exec().then((result) => {
                // console.log(result);
                if (result) {
                    userController.update(
                        {
                            username
                        },
                        queryData
                    )
                    res.json({
                        status: 200,
                        body: {
                            flag: true,
                            data: {
                                ...queryData,
                            },
                            message: '网易云登录成功'
                        }
                    })
                }
            }).catch((err) => {
                console.log(err);
            })
        } catch (error) {
            console.log(error)
        }
    } else {
        res.status(404).send('请检查传入数据是否完整');
    }
})

router.post('/user_detail', function (req, res) {
    let request = req.body;
    if (request.id) {
        user_detail({
            uid: request.id
        }).then((result) => {
            let data = result.body;
            res.json(
                {
                    status: 200,
                    data: {
                        nickname: data.profile.nickname,
                        backgournd: data.profile.backgroundUrl,
                        signature: data.profile.signature
                    },
                }
            )
        }).catch((err) => {
            console.log(err)
        })
    } else {
        res.json(
            {
                message: 'id未传入'
            }
        )
    }
})

//星星堆漫天
router.post('/search', function (req, res, next) {
    console.log(req.body);
    let { keywords, type, limit, offset } = req.body;
    if (keywords) {
        search({ keywords, type: type || 1, limit: limit || 30, offset: offset || 0 }).then((response) => {
            const arr = response.body.result.songs;
            res.send(arr)
        })
    } else {
        res.status(404).send('请检查是否传入数据无误');
    }
})

router.post('/post', function (req, res, next) {
    res.json(req.body)
})

//1_18190004277
router.post('/playlist', function (req, res, next) {
    let request = req.body;
    /*
    if (request.username) {
        userController.select(
            {
                net163_username: request.username || "1_18190004277",
            }
        ).exec().then((result) => {
            // Prints "Space Ghost is a talk show host."
            user_playlist({
                uid: result.net163_userid
            }).then((response) => {
                res.send(response.body)
            })
        }).catch((err) => {
            console.log(err);
        })
    } else {
        res.status(404).send('请检查是否传入数据无误');
    }
    */
    userController.select(
        {
            net163_username: request.username || "1_18190004277",
        }
    ).exec().then((result) => {
        // Prints "Space Ghost is a talk show host."
        user_playlist({
            uid: result.net163_userid
        }).then((response) => {
            res.send(response.body)
        })
    }).catch((err) => {
        console.log(err);
    })
})

// 3198824474
router.post('/playlist_detail', function (req, res, next) {
    let request = req.body;
    if (request.id) {
        playlist_detail({
            id: request.id,
        }).then((response) => {
            res.send(response.body)
        })
    } else {
        res.status(404).send('请检查是否传入数据无误');
    }
})

router.post('/playlist_all', (req, res, next) => {
    // console.log(req.body);
    let { id, limit, offset } = req.body
    if (id) {
        playlist_track_all({
            id,
            limit: limit || 50,
            offset: offset || 0
        }).then((response) => {
            // console.log(response);
            res.send(response.body)
        }).catch(err => {
            res.send(err)
        })
    } else {
        res.status(404).send('请检查是否传入数据无误');
    }
})

//316103
router.post('/song_url', function (req, res, next) {
    let request = req.body;
    console.log(request);
    /*
    if (request.id) {
        const reqData = {
            id: request.id
        }
        check_music({
            id: reqData.id
        }).then((response) => {
            if (response.body.success) {
                userController.select(
                    {
                        net163_username: request.id || "1_18190004277",
                    }
                ).exec().then((result) => {
                    song_url({
                        id: reqData.id,
                        cookie: result.net163_usercookie
                    }).then((songRes) => {
                        res.send(songRes)
                    }).catch((err) => {
                        res.send(err)
                    })
                })
            } else {
                res.send(response.body.message)
            }
        }).catch((err) => {
            res.send(err)
        })
    } else {
        res.status(404).send('请检查是否传入数据无误');
    }
    */
    const reqData = {
        id: request.id
    }
    check_music({
        id: reqData.id
    }).then((response) => {
        if (response.body.success) {
            userController.select(
                {
                    net163_username: request.username || "1_18190004277",
                }
            ).exec().then((result) => {
                song_url({
                    id: reqData.id,
                    cookie: result.net163_usercookie
                }).then((songRes) => {
                    res.send(songRes)
                }).catch((err) => {
                    res.send(err)
                })
            })
        } else {
            res.send(response.body.message)
        }
    }).catch((err) => {
        res.send(err)
    })
})

router.post('/song_detail', function (req, res, next) {
    let request = req.body;
    // console.log(typeof request.id);
    song_detail({
        ids: request.id
    }).then((response) => {
        res.send(response)
    }).catch((err) => {
        res.send(err)
    });
})

//10930449
router.post('/mv', function (req, res, next) {
    let request = req.body;
    if (request.mvid) {
        const data = {
            mvid: request.mvid
        }
        mv_detail(data).then((result) => {
            body = result.body;
            mv_url({
                id: body.data.id
            }).then((response) => {
                res.send(response)
            }).catch((err) => {
                res.send(err)
            })
        }).catch((err) => {
            res.send(err)
        })
    } else {
        res.status(404).send('请检查是否传入数据无误');
    }
})

// 4237846
// 316103
router.post('/lyric', function (req, res, next) {
    let request = req.body;
    if (request.id) {
        const data = {
            id: request.id
        }
        lyric(data).then((response) => {
            res.send(response.body)
        }).catch((err) => {
            res.send(err)
        })
    } else {
        res.status(404).send('请检查是否传入数据无误');
    }
})

router.post('/hot', function (req, res, next) {
    search_hot({}).then((response) => {
        res.send(response)
    })
})

router.post('/hot_detail', function (req, res, next) {
    search_hot_detail({}).then((response) => {
        res.send(response)
    })
})

router.post('/top/song', function (req, res, next) {
    top_song({}).then((response) => {
        res.send(response)
    })
})

module.exports = router;


// "body": {
//     "level": 8,
//     "listenSongs": 5649,
//     "userPoint": {
//         "userId": 247612865,
//         "balance": 510,
//         "updateTime": 1625386942507,
//         "version": 10,
//         "status": 0,
//         "blockBalance": 0
//     },
//     "mobileSign": false,
//     "pcSign": false,
//     "profile": {
//         "avatarDetail": null,
//         "userId": 247612865,
//         "vipType": 11,
//         "userType": 0,
//         "createTime": 1456621405367,
//         "avatarImgIdStr": "19154592067744718",
//         "backgroundImgIdStr": "18789554208839754",
//         "description": "",
//         "nickname": "1wo1dream",
//         "mutual": false,
//         "followed": false,
//         "remarkName": null,
//         "authStatus": 0,
//         "detailDescription": "",
//         "experts": {},
//         "expertTags": null,
//         "djStatus": 0,
//         "accountStatus": 0,
//         "province": 0,
//         "city": 100,
//         "defaultAvatar": false,
//         "backgroundImgId": 18789554208839750,
//         "backgroundUrl": "http://p1.music.126.net/oZ9FI5oWaIIVrfsRSPTn2A==/18789554208839754.jpg",
//         "gender": 1,
//         "birthday": -2209017600000,
//         "avatarImgId": 19154592067744720,
//         "avatarUrl": "http://p1.music.126.net/A6BqGhz2Wa0Lue8aE4IhMA==/19154592067744718.jpg",
//         "signature": "some one or no one",
//         "authority": 0,
//         "followeds": 11,
//         "follows": 141,
//         "blacklist": false,
//         "eventCount": 6,
//         "allSubscribedCount": 0,
//         "playlistBeSubscribedCount": 1,
//         "avatarImgId_str": "19154592067744718",
//         "followTime": null,
//         "followMe": false,
//         "artistIdentity": [],
//         "cCount": 0,
//         "sDJPCount": 0,
//         "playlistCount": 6,
//         "sCount": 0,
//         "newFollows": 141
//     },
//     "peopleCanSeeMyPlayRecord": true,
//     "bindings": [
//         {
//             "userId": 247612865,
//             "url": "",
//             "expiresIn": 2147483647,
//             "refreshTime": 1456621388,
//             "bindingTime": 1456621388766,
//             "tokenJsonStr": null,
//             "expired": false,
//             "id": 2835218440,
//             "type": 1
//         }
//     ],
//     "adValid": false,
//     "code": 200,
//     "createTime": 1456621405367,
//     "createDays": 1954
// },
// "cookie": [
//     "NMTID=00OTNHhC788dqAOMEDBllH5ogCHoLkAAAF6cJyAQg; Max-Age=315360000; Expires=Wed, 2 Jul 2031 08:22:22 GMT; Path=/;"
// ]