var express = require("express");
var router = express.Router();
/**
 * Model Schema , Path Name and Shema Columns
 */
var mySchema = require("./users.model");
var pathName = "users";
var schemaColumns = {
    user_company: "",
    user_designation: "",
    user_pass: "",
    user_name: ""
};
/**
 * Core Functions
 */
var getAll = require("../../core/getall");
var getOne = require("../../core/getone");
var postDocs = require("../../core/post");
var deleteDocs = require("../../core/delete");
var updateDocs = require("../../core/update");
/**
 * Get All Router
 */
router.get('/' + pathName, function (req, res, next) {
    getAll(res, req, mySchema);
});
/**
 * Get Single Router
 */
router.get('/' + pathName + '/:id', function (req, res, next) {
    getOne(req, res, mySchema);
});
/**
 * Post Router
 */
router.post('/' + pathName, function (req, res, next) {
    postDocs(req, res, mySchema, schemaColumns);
});
/**
 * Update Router
 */
router.put('/' + pathName + '/:id', function (req, res, next) {
    updateDocs(req, res, mySchema, schemaColumns);
});
/**
 * Delete Router
 */
router.delete('/' + pathName + '/:id', function (req, res, next) {
    deleteDocs(req, res, mySchema);
});
module.exports = router; // Router Export