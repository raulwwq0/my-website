'use strict'

var express = require('express');

var ProjectController = require('../controllers/project');

var router = express.Router();

// Connect-multiparty configuration
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/projects'});


router.post('/save', ProjectController.save);
router.post('/upload-image/:id', md_upload, ProjectController.upload);
router.get('/projects', ProjectController.getProjects);
router.get('/get-image/:image', ProjectController.getImage);

module.exports = router;