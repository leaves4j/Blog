/**
 * Created by leaves on 2015/1/18.
 */
var express = require('express');
var router = express.Router();

require('./indexCtrl')(router);
require('./loginCtrl')(router);
require('./contentCtrl')(router);
require('./listCtrl')(router);
require('./sidebarCtrl')(router);
require('./mgrCtrl')(router);
require('./replyCtrl')(router);
require('./loginCtrl')(router);
module.exports = router;
