var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var debug = require('morgan');
var logger = require('./util/logger');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
//var sysConf=require('./conf/sysConf');
var sysConf = require('./conf/conf.json').sys;
var routes = require('./routes');

var app = express();
if (sysConf.debug)
    app.use(debug('dev'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cookieSession({name: 'session', keys: sysConf.sessionKey}));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use(function (req, res, next) {
    res.render('404', {})
});

app.use(function (err, req, res, next) {
    if (sysConf.debug)
        console.log(err);
    else
        logger.error(
            '\n headers:' + JSON.stringify(req.headers),
            '\n body:' + JSON.stringify(req.body),
            '\n '+err);
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
