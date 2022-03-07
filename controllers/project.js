'use strict'

var fs = require('fs');
var path = require('path');
var Project = require('../models/project');

var controller = {

    getProjects: (req, res) => {

        // Find data
        Project.find({}).sort('-_id').exec((err, projects) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'It was not possible to send projects'
                })
            };

            if (!projects) {
                return res.status(404).send({
                    status: 'error',
                    message: 'There are not projects to send'
                })
            };

            return res.status(200).send({
                status: 'success',
                projects
            });
        });        
    },

    getImage: (req, res) => {
        var file = req.params.image;

        // Get image path
        var file_path = './upload/projects/' + file;

        // Look if image exist
        fs.access(file_path, fs.constants.F_OK, (err) => {
            if (err) {
                return res.status(404).send({
                    status: 'error',
                    message: 'Image not found'
                });
            } else {
                return res.sendFile(path.resolve(file_path));
            }
        });
    },
}

module.exports = controller;