/**
 * Created by leaves on 2015/2/7.
 */
var dbUtil = require('../util/dbUtil');
module.exports = function (pool) {
    var db = dbUtil(pool);
    return {
        getById: function (id, callback) {
            var sql = "select ID,BlogId,ReplyName,ReplyUrl,ReplyTo,ReplyContent,date_format(CreateTime,'%Y-%m-%d %H:%i') as CreateTime "
                + "from reply where BlogId=? order by CreateTime desc";
            db.query(sql, id, callback);
        },
        add: function (reply, callback) {
            db.query('insert into reply set ?', reply, callback)
        }
    }
};