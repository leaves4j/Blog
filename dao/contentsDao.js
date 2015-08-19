/**
 * Created by leaves on 2015/1/18.
 */
var dbUtil = require('../util/dbUtil');
module.exports = function (pool) {
    var db = dbUtil(pool);
    return {
        getAll: function (start, end, callback) {
            var sql = "select ID,Title,Summary,date_format(CreateTime,'%Y-%m-%d %H:%i') as CreateTime,Replies,Views,BlogType,PicturePath "
                + "from contents order by CreateTime desc limit ?, ?; ";
            db.query(sql, [start, end], callback);
        },
        getCount: function (callback) {
            var sql = "select count(*) as size from contents";
            db.query(sql, null, callback);
        },
        getAllByType: function (type, start, end, callback) {
            var sql = "select ID,Title,Summary,date_format(CreateTime,'%Y-%m-%d %H:%i') as CreateTime,Replies,Views,BlogType,PicturePath "
                + "from contents where BlogType=? order by CreateTime desc limit ?, ?; ";
            db.query(sql, [type, start, end, type], callback);
        },
        getCountByType: function (type, callback) {
            var sql = "select count(*) as size from contents where BlogType=?";
            db.query(sql, [type], callback);
        },
        getById: function (id, callback) {
            var sql = "select a.ID,Title,Summary,date_format(CreateTime,'%Y-%m-%d %H:%i') as CreateTime,Replies,Views,BlogType,PicturePath , "
                + "Text,Keywords from contents  a "
                + "left join contentDetail b on a.ID=b.ID "
                + "where a.id=?";
            db.query(sql, [id], callback);
        },
        add: function (content, callback) {
            //TODO:async修改
            db.query('insert into contents set ?', {
                    title: content.title,
                    summary: content.summary,
                    blogtype: content.blogtype
                },
                function (err, result) {
                    if (err) throw err;
                    else {
                        db.query('insert into contentDetail set ?', {
                            id: result.insertId,
                            text: content.text,
                            keywords: content.keywords
                        }, callback)
                    }
                });

        },
        getTop: function (callback) {
            var sql = 'select id,title,views,replies from contents order by views and replies asc limit 10';
            db.query(sql, null, callback);
        },
        addViewCount: function (id, callback) {
            var sql = 'update contents set views=views+1 where id=?';
            db.query(sql, id, callback);
        }
    }
};