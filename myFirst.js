var http = require('http');
var dt = require('./myFirstMoudle');
var fs = require('fs');
var url = require('url');

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

http.createServer(function(req , res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('Hello World!');
    res.write('</br>');
    res.write('The time now is: ' + dt.myTime());
    res.write('</br>');
    res.write('url is: ' + req.url);
    res.write('</br>');
    res.write('adr parsing: ' + adr);
    res.write('</br>');
    res.write('Host: ' + q.host);
    res.write('</br>');
    res.write('Pathname: ' + q.pathname);
    res.write('</br>');
    res.write('Search: ' + q.search);
    res.write('</br>');
    res.write('Query: ' + q.query.year + ' ' + q.query.month);
    res.write('</br>');
    fs.readFile('./demoFile1.html', function(err, data){
        res.write(data);
        res.end();
    });
}).listen(8080);
