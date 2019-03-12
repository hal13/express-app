var express = require('express');
var ejs = require('ejs');

var app = express();

app.engine('ejs', ejs.renderFile);
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// ※トップページ
app.get('/', function (req, res) {
    var msg = 'This is Express Page!<br>'
        + 'メッセージを書いて送信してください。';
    res.render('index.ejs', {
        title: 'Index', 
        content: msg, 
    });
});

// ※POST送信処理
app.post('/', function (req, res) {
    var msg = 'This is Posted Page!<br>' +
        'あなたは「' + req.body.message +
        '」と送信しました。';
    res.render('index.ejs', {
        title: 'Posted',
        content: msg
    });
})

app.listen(3000, function () {
    console.log('Server is running!');
});