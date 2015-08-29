/**
 * Created by leaves on 2015/1/18.
 */
var mysql = require('mysql');
var dbConf = require('../conf/conf.json').mysql;

if (!global.DB_MYSQL_POOL)
    global.DB_MYSQL_POOL = mysql.createPool(dbConf);
var pool = global.DB_MYSQL_POOL;
module.exports = {
    contentsDao: require('./contentsDao')(pool),
    blogTypeDao:require('./blogTypeDao')(pool),
    replyDao:require('./replyDao')(pool)
};
