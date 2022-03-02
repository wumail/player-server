var mongoose = require('mongoose'),
    DB_URL = 'mongodb://localhost:27017/myplayer';

/**
 * 连接
 */
if (mongoose.connection.readyState === 0) {
    mongoose.connect(DB_URL);
}

/**
  * 连接成功
  */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + DB_URL);
});

/**
 * 连接异常
 */
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose;

// {
//   "_id": {
//     "$oid": "60c16d988e72b029642d1131"
//   },
//   "net163_username": "1_18190004277",
//   "net163_userpwd": "wsad241241",
//   "net163_userid": "247612865",
//   "net163_usercookie": "__csrf=3bbdd15e2d9292e4d74b76b915077fb4; Max-Age=1296010; Expires=Mon, 19 Jul 2021 09:35:20 GMT; Path=/;;NMTID=00OCZhRJK5MbfzXSkLbrG8icdH5X7sAAAF6cN8oJw; Max-Age=315360000; Expires=Wed, 2 Jul 2031 09:35:10 GMT; Path=/;;MUSIC_U=e208fc81f5c0b741659583b166e445672b1291d054acbedb079434ad1a6b06dd33a649814e309366; Max-Age=1296000; Expires=Mon, 19 Jul 2021 09:35:10 GMT; Path=/;;__remember_me=true; Max-Age=1296000; Expires=Mon, 19 Jul 2021 09:35:10 GMT; Path=/;",
//   "qq_usercookie": "",
//   "logindate": {
//     "$date": "2021-06-10T01:40:40.262Z"
//   },
//   "__v": 0,
//   "net163_nickname": "1wo1dream"
// }

// {
//     "_id": {
//       "$oid": "60c17613cc3952267c3ed229"
//     },
//     "net163_username": "1_13722093265",
//     "net163_userpwd": "chw123322..",
//     "net163_userid": "1487461780",
//     "net163_usercookie": "NMTID=00O6k0xKVJVLiZQXkJdo83XujbhT_sAAAF6F4Sw-A; Max-Age=315360000; Expires=Sun, 15 Jun 2031 01:10:09 GMT; Path=/;;__remember_me=true; Max-Age=1296000; Expires=Fri, 2 Jul 2021 01:10:09 GMT; Path=/;;MUSIC_U=dbcc39296c2e7eba9c6d063ef82fb2526e9b82acd574e58b3e9b9b85f10d7fda33a649814e309366; Max-Age=1296000; Expires=Fri, 2 Jul 2021 01:10:09 GMT; Path=/;;__csrf=134728394393a6399894f1ebd10b579b; Max-Age=1296010; Expires=Fri, 2 Jul 2021 01:10:19 GMT; Path=/;",
//     "qq_usercookie": "",
//     "logindate": {
//       "$date": "2021-06-10T02:16:51.674Z"
//     },
//     "__v": 0
//   }

// {
//     "_id": {
//       "$oid": "60e045b7eba4bb46e077959c"
//     },
//     "username": "chw@qq.com",
//     "password": "123qwe",
//     "logindate": {
//       "$date": "2021-07-03T11:10:47.880Z"
//     },
//     "__v": 0,
//     "net163_usercookie": "NMTID=00OWjsGyJek1TWM6ke5sI_dlCRitPgAAAF6cOJmBw; Max-Age=315360000; Expires=Wed, 2 Jul 2031 09:38:43 GMT; Path=/;;MUSIC_U=dbcc39296c2e7eba9c6d063ef82fb2522b1291d054acbedba748c4b8fcef421633a649814e309366; Max-Age=1296000; Expires=Mon, 19 Jul 2021 09:38:43 GMT; Path=/;;__csrf=88a6830b9e399e95ad91ad64a54c698c; Max-Age=1296010; Expires=Mon, 19 Jul 2021 09:38:53 GMT; Path=/;;__remember_me=true; Max-Age=1296000; Expires=Mon, 19 Jul 2021 09:38:43 GMT; Path=/;",
//     "net163_userid": "1487461780",
//     "net163_username": "1_13722093265",
//     "net163_nickname": "chihw"
//   }

// {
//     "_id": {
//       "$oid": "60e149d69a248a4c18eeab83"
//     },
//     "username": "123@qq.com",
//     "password": "123qwe",
//     "logindate": {
//       "$date": "2021-07-04T05:40:38.343Z"
//     },
//     "__v": 0,
//     "net163_nickname": "1wo1dream",
//     "net163_usercookie": "MUSIC_U=e208fc81f5c0b741659583b166e445672b1291d054acbedbaef2ae193a920f2733a649814e309366; Max-Age=1296000; Expires=Mon, 19 Jul 2021 09:44:52 GMT; Path=/;;NMTID=00ORUxtbCFMIA-XvkTGt-aKcgElOb0AAAF6cOgIGA; Max-Age=315360000; Expires=Wed, 2 Jul 2031 09:44:52 GMT; Path=/;;__remember_me=true; Max-Age=1296000; Expires=Mon, 19 Jul 2021 09:44:52 GMT; Path=/;;__csrf=71a735043abaea039fdfed2a3e763302; Max-Age=1296010; Expires=Mon, 19 Jul 2021 09:45:02 GMT; Path=/;",
//     "net163_userid": "247612865",
//     "net163_username": "1_18190004277"
//   }