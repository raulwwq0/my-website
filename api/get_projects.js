'use strict'

var express = require('express');

var ProjectController = require('../controllers/project');

var router = express.Router();

// Connect-multiparty configuration
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/projects'});

router.get('/get-projects', ProjectController.getProjects);


module.exports = router;