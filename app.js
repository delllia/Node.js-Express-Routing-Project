var request = require('request');
var url = require('url');
var path = require('path');
var express = require('express');
var app = express();


var aboutRoute = require('./routes/about');
var skillsRoute = require('./routes/skills');
var studiesRoute = require('./routes/studies');
var experienceRoute = require('./routes/experience');
var projectsRoute = require('./routes/projects');


app.use(express.static(__dirname + '/public', {index: 'index.html'}));

app.use('/about', aboutRoute);
app.use('/skills', skillsRoute);
app.use('/studies', studiesRoute);
app.use('/experience', experienceRoute);
app.use('/projects', projectsRoute);


app.listen(8080, function() {
    console.log('Listening on port 8080...');
});
