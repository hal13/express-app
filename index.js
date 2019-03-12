var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Welcome to Express!')
})

app.listen(3000, function () {
    console.log('Start server port:3000')
})