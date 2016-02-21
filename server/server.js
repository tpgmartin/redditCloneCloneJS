var express = require('express'),
    http = require('http'),
    path = require('path');

var server = express();

server.set('views', path.join(__dirname, '../public/views'));
server.set('view engine', 'jade');

server.get('/', function (req, res) {

    res.render('index', { title: 'Index' });
  
});

http.createServer(server).listen(8000);