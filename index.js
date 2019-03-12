var express = require('express');
var ejs = require('ejs');

var app = express();

app.engine('ejs', ejs.renderFile);

app.use(express.static('public'));

app.get('/', function (req, res) {
    var msg = 'This is Express Page!<br>'
        + 'これは、スタイルシートを利用した例です。';
    res.render('index.ejs', {
        title: 'Index', content: msg
    });
});

app.listen(3000, function () {
    console.log('Server is running!');
});