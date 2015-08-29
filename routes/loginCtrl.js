/**
 * Created by leaves on 2015/1/18.
 */
var sysConf = require('../conf/conf.json').sys;
module.exports = function (router) {
    router.get('/login', function (req, res, next) {
        res.render('login', {});
    });
    router.post('/login', function (req, res, next) {
        var user = req.body;
        if (sysConf.code == user.code && sysConf.password == user.password) {
            req.session.isLogin = 'login';
            res.redirect('./mgr');
        }
        else
            res.render('login', {});
    });
};