/**
 * Created by leaves on 2015/2/4.
 */
var dbUtil = require('../util/dbUtil');
module.exports = function (pool) {
    var db = dbUtil(pool);
    return {
        getAll: function (callback) {
            var sql = "select id,typeName from blogtype order by num";
            db.query(sql, null, callback);
        }
    }
};