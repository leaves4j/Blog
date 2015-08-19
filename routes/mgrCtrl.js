/**
 * Created by leaves on 2015/2/10.
 */
var dao = require('../dao');
module.exports = function (router) {
    router.get('/mgr', function (req, res, next) {
        if (req.session.isLogin != 'login')
            res.redirect('./login');
        else
            dao.blogTypeDao.getAll(function (err, result) {
                if (err)
                    res.render('error', null);
                else
                    res.render('mgr', {blogType: result});
            });
    });
    router.post('/mgr/blog', function (req, res, next) {
        var content = req.body;
        if (req.session.isLogin != 'login')
            res.redirect('./login');
        else
            dao.contentsDao.add(content, function (err, result) {
                if (err) {
                    throw err;
                }

                else
                    res.status(200).send('OK');
            })
    });
};