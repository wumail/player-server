const User = require("./schema/user.js");

/**
 * 插入
 */
function insert() {

    const user = new User({
        username: 'Tracy McGrady',                 //用户账号
        userpwd: 'abcd',                            //密码                            //年龄
        logindate: new Date()                      //最近登录时间
    });

    user.save(function (err, res) {

        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }

    });
}

function update(){
    const wherestr = {'username' : 'Tracy McGrady'};
    const updatestr = {'userpwd': 'zzzz'};
    
    User.updateOne(wherestr, updatestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

function del(){
    const wherestr = {'username' : 'Tracy McGrady'};
    
    User.remove(wherestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

// del();
// update();
insert();