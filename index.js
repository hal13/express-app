var express = require('express');
var ejs = require('ejs');

var app = express();

app.engine('ejs', ejs.renderFile);

app.get('/', function (req, res) {
    res.render('index.ejs', {
        title: 'Index',
        content: 'This is Express-app Top page!'
    });
});

app.listen(3000, function () {
    console.log('Start server port:3000');
});