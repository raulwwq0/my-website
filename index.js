'use strict'

// Modules
var mongoose = require('mongoose');
var app = require('./app');

// Port for localhost
//var port = 3900;

// Mongoose configurations
mongoose.Promise = global.Promise;

mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            // Create server
            app.listen(process.env.PORT, () => {
                console.log('Server working on port: ' + process.env.PORT);
            });
        });