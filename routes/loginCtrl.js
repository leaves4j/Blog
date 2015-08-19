/**
 * Created by leaves on 2015/1/18.
 */
var loginInfo = require('../conf/sysConf').login;
module.exports = function (router) {
    router.get('/login', function (req, res, next) {
        res.render('login', {});
    });
    router.post('/login', function (req, res, next) {
        var user = req.body;
        if (loginInfo.code == user.code && loginInfo.password == user.password) {
            req.session.isLogin = 'login';
            res.redirect('./mgr');
        }
        else
            res.render('login', {});
    });
};