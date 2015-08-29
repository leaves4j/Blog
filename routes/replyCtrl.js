/**
 * Created by leaves on 2015/2/7.
 */
var dao = require('../dao');
module.exports = function (router) {
    router.post('/reply', function (req, res, next) {
        var reply = req.body;
        dao.replyDao.add(reply, function (err, result) {
            if (err){
                next(err) ;
            }

            else
                res.status(200).send('OK');
        })
    });
};