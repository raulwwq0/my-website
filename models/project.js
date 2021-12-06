'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    title: String,
    description_es: String,
    description_en: String,
    link: String,
    image: String,
    repo: String,
});

module.exports = mongoose.model('Project', ProjectSchema);