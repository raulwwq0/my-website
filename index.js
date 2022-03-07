'use strict'

// Modules
var mongoose = require('mongoose');
var app = require('./app');

// Mongoose configurations
mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            // Create server
            app.listen(process.env.PORT, () => {
                console.log('Server working on port: ' + process.env.PORT);
            });
        });