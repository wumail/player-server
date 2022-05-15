const User = require('../database/schema/user');

/**
 * 插入
 */
function insert(data) {
    const user = new User({
        ...data,
        logindate: new Date()                      //最近登录时间
    });
    return user.save(function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    });
}

function update(target, content) {
    const wherestr = {};
    for (const key in target) {
        wherestr[key] = target[key]
    }
    const updatestr = {};
    for (const key in content) {
        updatestr[key] = content[key]
    }
    return User.updateOne(wherestr, updatestr, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + JSON.stringify(res));
        }
    })
}

function del(target) {
    const wherestr = {};
    for (const key in target) {
        wherestr[key] = target[key]
    }
    return User.remove(wherestr, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

function select(target) {
    const wherestr = {};
    for (const key in target) {
        wherestr[key] = target[key]
    }
    return User.findOne(wherestr)
}

module.exports = {
    insert,
    update,
    del,
    select,
}