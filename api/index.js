'use strict'

// Modules
var mongoose = require('mongoose');
var app = require('./app');

// Port for localhost
//var port = 3900;
//const dbURL = 'mongodb+srv://rag:wZhKOIAPdgqXYuJF@cluster0.6rqm4.mongodb.net/api_my_website?retryWrites=true&w=majority';

// Mongoose configurations
mongoose.Promise = global.Promise;

mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true })
        .then(() => {
            // Create server
            app.listen(process.env.PORT, () => {
                console.log('Server working on port: ' + process.env.PORT);
            });
        });