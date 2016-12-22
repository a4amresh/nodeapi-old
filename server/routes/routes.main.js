var express = require("express");
var router = express.Router();
var users = require("./users/users.model");
var tasks = require("./tasks/tasks.model");

/**
 * All Rulter
 */

//module.exports = router; // Router Export