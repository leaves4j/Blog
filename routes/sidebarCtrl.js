/**
 * Created by leaves on 2015/1/21.
 */
module.exports = function (router) {
    router.get('/sidebar', function (req, res, next) {
        res.render('sidebar', null);
    });
};