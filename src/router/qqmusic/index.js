const express = require('express');
const userController = require('@c/userController.js');
const router = express.Router();
const qqMusic = require('qq-music-api');

// 部分接口依赖 cookie, 这里穿参可以使用字符串或对象
// qqMusic.setCookie('xxx=xxx; xxx=xxx;');
router.post("/setCookie", function (req, res, next) {
    // console.log(req.body);
  let { cookie, username } = req.body
  const ifexist = userController.select(
    {
        username,
    }
  )
  ifexist.exec().then((result) => {
    //   console.log(1,result);
      if (result) {
          userController.update(
              {
                  username
              },
              {
                qqmusic_usercookie:cookie
              }
          )
          res.json({
              status: 200,
              body: {
                  flag: true,
                  data: {},
                  message: 'QQ音乐cookie保存成功'
              }
          })
      }
      qqMusic.setCookie(cookie)
    //   qqMusic.api('/user/setCookie',{ data: 1})
  }).catch((err) => {
      console.log(err);
  })
})

router.post('/user/refresh', (req, res, next) => {
    qqMusic.api('/user/refresh')
})

router.post('/search', (req, res, next)=>{
    let { key, pageNo, pageSize} = req.body
    qqMusic.api('search', { key: key || '周杰伦', pageNo: pageNo || 1, pageSize: pageSize || 20 })
      .then(res => console.log(res))
      .catch(err => console.log('接口调用出错'))
})

router.post('/new/songs', (req, res, next) => {
    qqMusic.api('/new/songs', {type : req.body.type || 0})
        .then((response) =>{ res.send(response.data.list)})
        .catch(err => console.log('接口调用出错'))//
})
// {
//     "id": 346257218,
//     "type": 0,
//     "mid": "004cHdoE00nMVU",
//     "name": "SCIENTIST",
//     "title": "SCIENTIST (Japanese ver.)",
//     "subtitle": "",
//     "singer": [
//         {
//             "id": 1040218,
//             "mid": "001p0vF44ewiwB",
//             "name": "TWICE",
//             "title": "TWICE (트와이스)",
//             "type": 2,
//             "uin": 0,
//             "pmid": ""
//         }
//     ],
//     "album": {
//         "id": 26009775,
//         "mid": "000XVciB1R79rk",
//         "name": "#TWICE4 (Japanese ver.)",
//         "title": "#TWICE4 (Japanese ver.)",
//         "subtitle": "",
//         "time_public": "2022-03-16",
//         "pmid": "000XVciB1R79rk_1"
//     },
//     "mv": {
//         "id": 1923899,
//         "vid": "z0042rl4ctm",
//         "name": "",
//         "title": "",
//         "vt": 0
//     },
//     "interval": 196,
//     "isonly": 0,
//     "language": 3,
//     "genre": 1,
//     "index_cd": 0,
//     "index_album": 4,
//     "time_public": "2022-03-16",
//     "status": 0,
//     "fnote": 4009,
//     "file": {
//         "media_mid": "004cHdoE00nMVU",
//         "size_24aac": 0,
//         "size_48aac": 1186986,
//         "size_96aac": 2371941,
//         "size_192ogg": 4776775,
//         "size_192aac": 4715298,
//         "size_128mp3": 3148736,
//         "size_320mp3": 7871466,
//         "size_ape": 0,
//         "size_flac": 0,
//         "size_dts": 0,
//         "size_try": 960887,
//         "try_begin": 0,
//         "try_end": 0,
//         "url": "",
//         "size_hires": 0,
//         "hires_sample": 0,
//         "hires_bitdepth": 0,
//         "b_30s": 0,
//         "e_30s": 60000,
//         "size_96ogg": 2372054,
//         "size_360ra": [],
//         "size_dolby": 0
//     },
//     "pay": {
//         "pay_month": 1,
//         "price_track": 200,
//         "price_album": 0,
//         "pay_play": 0,
//         "pay_down": 1,
//         "pay_status": 0,
//         "time_free": 0
//     },
//     "action": {
//         "switch": 16889603,
//         "msgid": 14,
//         "alert": 2,
//         "icons": 8535932,
//         "msgshare": 0,
//         "msgfav": 0,
//         "msgdown": 0,
//         "msgpay": 6,
//         "switch2": 0,
//         "icon2": 0
//     },
//     "ksong": {
//         "id": 28458999,
//         "mid": "000HBRCP3k16U8"
//     },
//     "volume": {
//         "gain": -11.035,
//         "peak": 1,
//         "lra": 3.828
//     },
//     "label": "0",
//     "url": "",
//     "bpm": 0,
//     "version": 0,
//     "trace": "",
//     "data_type": 0,
//     "modify_stamp": 0,
//     "pingpong": "",
//     "aid": 0,
//     "ppurl": "",
//     "tid": 0,
//     "ov": 0,
//     "sa": 0,
//     "es": "",
//     "vs": [
//         "064EnOzA3gxtBe",
//         "",
//         ""
//     ],
//     "vi": [],
//     "ktag": "0"
// }

//346257218

router.post('/song', (req, res, next) => {
    qqMusic.api('/song', { songmid: req.body.songmid })
        .then((response) => res.send(response))
        .catch(err => console.log('接口调用出错'))//
})


router.post('/song/urls', (req, res, next) => {
    qqMusic.api('/song/urls', { id: req.body.id })
        .then((response) => res.send(response))
        .catch(err => res.send(req))//
})

router.post('/song/finds', (req, res, next) => {
    qqMusic.api('/song/finds', { data: req.body.data })
        .then((response) => res.send(response))
        .catch(err => console.log('接口调用出错'))//
})

router.post('/lyric', (req, res, next) => {
    // console.log(req.body);
    let { songmid } = req.body
    qqMusic.api('/lyric', { songmid })
        .then((response) => res.send(response))
        .catch(err => console.log('接口调用出错'))//
})

router.post('/user/songlist', (req, res, next) => {
    // console.log(req.body);
    let { id } = req.body
    qqMusic.api('/user/songlist', { id })
        .then((response) => res.send(response.list))
        .catch(err => console.log('接口调用出错'))//
})

router.post('/songlist', (req, res, next) => {
    // console.log(req.body);
    let { id } = req.body
    qqMusic.api('/songlist', { id })
        .then((response) => res.send(response.data))
        .catch(err => console.log('接口调用出错'))//
})

// {
//     "result": 100,
//     "data": {
//         "list": [
//             {
//                 "diss_name": "QZone背景音乐",
//                 "diss_cover": "http://y.gtimg.cn/mediastyle/y/img/cover_qzone_130.jpg",
//                 "song_cnt": 0,
//                 "listen_num": 0,
//                 "dirid": 205,
//                 "tid": 0,
//                 "dir_show": 0
//             },
//             {
//                 "diss_name": "1",
//                 "diss_cover": "http://y.gtimg.cn/music/photo_new/T002R300x300M000004OcEH83G3B9g.jpg?n=1",
//                 "song_cnt": 12,
//                 "listen_num": 10,
//                 "dirid": 18,
//                 "tid": 7726689260,
//                 "dir_show": 1
//             },
//             {
//                 "diss_name": "attached",
//                 "diss_cover": "http://y.gtimg.cn/music/photo_new/T002R300x300M000002OR8wD3Lo3E5.jpg?n=1",
//                 "song_cnt": 23,
//                 "listen_num": 149,
//                 "dirid": 17,
//                 "tid": 5033388147,
//                 "dir_show": 1
//             },
//             {
//                 "diss_name": "my own",
//                 "diss_cover": "http://y.gtimg.cn/music/photo_new/T002R300x300M000001HDJU02YJuNQ.jpg?n=1",
//                 "song_cnt": 38,
//                 "listen_num": 36,
//                 "dirid": 1,
//                 "tid": 4613672239,
//                 "dir_show": 1
//             },
//             {
//                 "diss_name": "A song of iceqndfire",
//                 "diss_cover": "http://y.gtimg.cn/music/photo_new/T002R300x300M000001ZaCQY2OxVMg.jpg?n=1",
//                 "song_cnt": 6,
//                 "listen_num": 11,
//                 "dirid": 16,
//                 "tid": 2016237298,
//                 "dir_show": 1
//             },
//             {
//                 "diss_name": "...",
//                 "diss_cover": "http://y.gtimg.cn/music/photo_new/T002R300x300M000000SlVgm21bxPA.jpg?n=1",
//                 "song_cnt": 10,
//                 "listen_num": 15,
//                 "dirid": 15,
//                 "tid": 2012036646,
//                 "dir_show": 1
//             },
//             {
//                 "diss_name": "I did",
//                 "diss_cover": "http://y.gtimg.cn/music/photo_new/T002R300x300M000004MqAwD15KeWx.jpg?n=1",
//                 "song_cnt": 16,
//                 "listen_num": 59,
//                 "dirid": 14,
//                 "tid": 1996017386,
//                 "dir_show": 1
//             },
//             {
//                 "diss_name": "好好",
//                 "diss_cover": "http://y.gtimg.cn/music/photo_new/T002R300x300M000003xG8AU10abZC.jpg?n=1",
//                 "song_cnt": 0,
//                 "listen_num": 27,
//                 "dirid": 13,
//                 "tid": 1994722436,
//                 "dir_show": 1
//             },
//             {
//                 "diss_name": "0",
//                 "diss_cover": "http://y.gtimg.cn/music/photo_new/T002R300x300M000002KlTDP4YjTis.jpg?n=1",
//                 "song_cnt": 27,
//                 "listen_num": 63,
//                 "dirid": 12,
//                 "tid": 1978202322,
//                 "dir_show": 1
//             },
//             {
//                 "diss_name": "。",
//                 "diss_cover": "http://y.gtimg.cn/music/photo_new/T002R300x300M000002KlTDP4YjTis.jpg?n=1",
//                 "song_cnt": 21,
//                 "listen_num": 57,
//                 "dirid": 11,
//                 "tid": 1977880679,
//                 "dir_show": 1
//             },
//             {
//                 "diss_name": "miuschan",
//                 "diss_cover": "http://y.gtimg.cn/music/photo_new/T002R300x300M000002KlTDP4YjTis.jpg?n=1",
//                 "song_cnt": 62,
//                 "listen_num": 58,
//                 "dirid": 10,
//                 "tid": 1968613783,
//                 "dir_show": 1
//             },
//             {
//                 "diss_name": "Make me sleep",
//                 "diss_cover": "http://y.gtimg.cn/music/photo_new/T002R300x300M000003qThKd0JzFmp.jpg?n=1",
//                 "song_cnt": 29,
//                 "listen_num": 40,
//                 "dirid": 9,
//                 "tid": 1965865699,
//                 "dir_show": 1
//             },
//             {
//                 "diss_name": "VOCALOID",
//                 "diss_cover": "http://y.gtimg.cn/music/photo_new/T002R300x300M000001LUpHc0zyK2L.jpg?n=1",
//                 "song_cnt": 76,
//                 "listen_num": 36,
//                 "dirid": 8,
//                 "tid": 1963613095,
//                 "dir_show": 1
//             },
//             {
//                 "diss_name": "Suki",
//                 "diss_cover": "http://qpic.y.qq.com/music_playls/1059037014/1059037014-6.jpg/0?p=1430557185&n=1",
//                 "song_cnt": 161,
//                 "listen_num": 730,
//                 "dirid": 6,
//                 "tid": 1938518130,
//                 "dir_show": 1
//             },
//             {
//                 "diss_name": "宫崎骏",
//                 "diss_cover": "http://qpic.y.qq.com/music_playls/1059037014/1059037014-5.jpg/0?p=1416029000&n=1",
//                 "song_cnt": 54,
//                 "listen_num": 19,
//                 "dirid": 5,
//                 "tid": 1924740935,
//                 "dir_show": 1
//             },
//             {
//                 "diss_name": "Youganit",
//                 "diss_cover": "http://y.gtimg.cn/music/photo_new/T002R300x300M000000kST1J0EMyrT.jpg?n=1",
//                 "song_cnt": 246,
//                 "listen_num": 49,
//                 "dirid": 4,
//                 "tid": 1898832326,
//                 "dir_show": 1
//             },
//             {
//                 "diss_name": "新建歌单2",
//                 "diss_cover": "http://y.gtimg.cn/music/photo_new/T002R300x300M0000025zqvp2ai0Cz.jpg?n=1",
//                 "song_cnt": 6,
//                 "listen_num": 19,
//                 "dirid": 3,
//                 "tid": 1888228707,
//                 "dir_show": 1
//             },
//             {
//                 "diss_name": "IlikeMusicIamIistening",
//                 "diss_cover": "http://qpic.y.qq.com/music_playls/1059037014/1059037014-2.jpg/0?p=1394066526&n=1",
//                 "song_cnt": 436,
//                 "listen_num": 97,
//                 "dirid": 2,
//                 "tid": 1838931524,
//                 "dir_show": 1
//             }
//         ],
//         "creator": {
//             "hostuin": "1059037014",
//             "encrypt_uin": "oKnkNKni7in57n**",
//             "hostname": "向"
//         }
//     }
// }

module.exports = router;
