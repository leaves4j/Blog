/**
 * Created by leaves on 2015/1/18.
 */
var async = require('async');
var dao = require('../dao');
module.exports = function (router) {
    router.get('/', function (req, res, next) {
        async.parallel({
                contents: function (callback) {
                    dao.contentsDao.getAll(0,10,callback);
                },
                blogType: function (callback) {
                    dao.blogTypeDao.getAll(callback);
                },
                tops: function (callback) {
                    dao.contentsDao.getTop(callback);
                },
                pageSize:function (callback) {
                    dao.contentsDao.getCount(callback);
                }
            },
            function (err, results) {
                if (err) {
                    next(err) ;
                }

                else
                    results.pagination = {
                        pageSize: results.pageSize[0].size,
                        type: 'All',
                        start: 1,
                        end: 10
                    };
                res.render('index', results);
            });

    });
};
