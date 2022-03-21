var mongoose = require('../db.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: { type: String },
    password: { type: String },
    net163_nickname: { type: String },
    net163_username: { type: String },                     //网易云账号
    net163_userid: { type: String },
    net163_usercookie: { type: String },            //cookie
    net163_token: { type: String },  //token
    qqmusic_usercookie: { type: String },
    logindate: { type: Date }                       //最近登录时间
});
// net163_userpwd: { type: String },                  //密码

module.exports = mongoose.model('User', UserSchema);