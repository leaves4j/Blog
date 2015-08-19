/**
 * Created by leaves on 2015/1/19.
 */
module.exports = function (db) {
    return {
        query: function (sql, values, cb) {
            db.getConnection(function (err, connection) {
                if (err) throw new Error(err);
                else
                    connection.query(sql, values, function (err, result) {
                        cb(err, result);
                        connection.release();
                    })
            });
        }
    }
};
