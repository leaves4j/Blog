/**
 * Created by leaves on 2015/1/20.
 */
var marked = require('marked');
var async = require('async');
var contentsDao = require('../dao').contentsDao;
var replyDao = require('../dao').replyDao;
marked.setOptions({
    highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
    }
});
module.exports = function (router) {
    router.get('/blog/:id', function (req, res, next) {
        var id = req.params.id;
        async.parallel({
            addViews: function (callback) {
                contentsDao.addViewCount(id, callback);
            },
            content: function (callback) {
                contentsDao.getById(id, callback);
            },
            replies: function (callback) {
                replyDao.getById(id, callback);
            }
        }, function (err, result) {
            if (err) {
                next(err);
            }
            else {
                result.content[0].Text = marked(result.content[0].Text);
                res.render('content', {content: result.content[0], replies: result.replies});
            }
        })
    });
};