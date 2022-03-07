'use strict'

var express = require('express');

var ProjectController = require('../controllers/project');

var router = express.Router();

router.get('/get-projects', ProjectController.getProjects);
router.get('/get-image/:image', ProjectController.getImage);

module.exports = router;