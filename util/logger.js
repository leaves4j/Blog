/**
 * Created by leaves on 2015/8/29.
 */
var fs = require('fs');
var log4js = require('log4js');
var logDirectory = './logs';
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
log4js.configure('./conf/log4js.json', { reloadSecs: 21600 });
exports = module.exports = log4js.getLogger('Log');


