'use strict'

var validator = require('validator');
var fs = require('fs');
var path = require('path');
var Project = require('../models/project');

var controller = {

    save: (req, res) => {
        // Catch data using post
        var params = req.body;

        // Validate data
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_description = !validator.isEmpty(params.description);
            var validate_link = !validator.isEmpty(params.link);

        } catch (err) {
            console.log(err)
            return res.status(500).send({
                status: 'error',
                message: 'Validation: Missing data'
            })

        };

        if (validate_title && validate_description && validate_link) {
            // Create object to save it
            var project = new Project();

            // Give data to the object
            project.title = params.title;
            project.description = params.description;
            project.link = params.link;
            project.image = null;

            // Save object
            project.save((err, projectStored) => {
                if (err || !projectStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'Project not save'
                    });
                }

                // Send a response

                return res.status(200).send({
                    status: 'success',
                    message: 'Project save',
                    project: projectStored
                })
            });

        } else {
            return res.status(400).send({
                status: 'error',
                message: 'Validation: Incorrect data values'
            })
        }


    },

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

    upload: (req, res) => {

        // Catch file
        var file_name = 'No image';

        if(!req.files){
            return res.status(404).send({
                status: 'error',
                message: file_name
            })
        }

        // Get name and extension from file
        var file_path = req.files.file0.path;
        var file_split = file_path.split('/');
        var file_name = file_split[2];
        var extension_split = file_name.split('.');
        var file_ext = extension_split[1];
        
        // Validate file extension
        if(file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg'){
            // Delete file
            fs.unlink(file_path, (err) => {
                return res.status(400).send({
                    status: 'error',
                    message: 'Invalid image extension'
                })
            });

        }else{
            // Find project and update image
            var projectId = req.params.id

            Project.findOneAndUpdate({_id: projectId}, {
                image: file_name,
            }, {new:true}, (err, projectUpdated) => {
                if(err || !projectUpdated){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Image could not be updated'
                    });     
                }
                return res.status(200).send({
                    status: 'success',
                    project: projectUpdated
                });
            });            
        };        
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