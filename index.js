var express = require('express');
var ejs = require('ejs');

var app = express();

app.engine('ejs', ejs.renderFile);

app.use(express.static('public'));

// ※トップページ
app.get('/', function (req, res) {
    var msg = 'This is Express Page!<br>'
        + 'これは、スタイルシートを利用した例です。';
    var url = '/other?name=taro&pass=yamada';
    res.render('index.ejs', {
        title: 'Index', 
        content: msg, 
        link: {href: url, text: '※別のページに移動'}
    });
});

// ※otherページ
app.get('/other', function (req, res) {
    var name = req.query.name;
    var pass = req.query.pass;
    var msg = 'あなたの名前は' + name + 
        '<br>パスワードは' + pass + 'です。';
    res.render('index.ejs', {
        title: 'Other',
        content: msg,
        link: {href: '/', text: '※トップに戻る'}
    });
})
app.listen(3000, function () {
    console.log('Server is running!');
});