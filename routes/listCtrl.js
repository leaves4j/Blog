/**
 * Created by leaves on 2015/2/1.
 */
var contentsDao = require('../dao').contentsDao;
var async = require('async');
module.exports = function (router) {
    router.get('/list/:type/:pageStart-:pageEnd', function (req, res, next) {
        var start = Math.ceil(req.params.pageStart);
        var end = Math.ceil(req.params.pageEnd);
        var type = req.params.type;
        if (type == 'All') {
            async.parallel({
                contents: function (callback) {
                    contentsDao.getAll(start - 1, end, callback);
                },
                pageSize: function (callback) {
                    contentsDao.getCount(callback);
                }
            }, function (err, results) {
                if (err) {
                    throw err;
                }

                else
                    res.render('list', {
                        contents: results.contents,
                        pagination: {
                            pageSize: results.pageSize[0].size,
                            type: type,
                            start: start,
                            end: end
                        }
                    })
            });
        }
        else {
            async.parallel({
                contents: function (callback) {
                    contentsDao.getAllByType(type,start - 1, end, callback);
                },
                pageSize: function (callback) {
                    contentsDao.getCountByType(type,callback);
                }
            }, function (err, results) {
                if (err) {
                    throw err;
                }

                else
                    res.render('list', {
                        contents: results.contents,
                        pagination: {
                            pageSize: results.pageSize[0].size,
                            type: type,
                            start: start,
                            end: end
                        }
                    })
            });
        }
    });
};