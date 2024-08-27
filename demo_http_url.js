var http =  require('http');
var url = require('url');

http.createServer((req,res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log(url);
    var q = url.parse(req.url, true).query;
    console.log(q);
    var text = q.year + " " + q.month;
    res.end(text);
}).listen(8080);

// http.createServer((req, res) =>{
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(req.url);
//     res.end();
// }).listen(8080);