var http = require('http');
http.createServer(function (req, res) {
    console.log('Got request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello Code and Azure Web Apps, does this update?!</h1>');
}).listen(process.env.PORT);

// this is a comment
//and have another one
console.log('this is some Azure gubbins')
console.log('and this is some further text')
if(5>3) console.log('you shouldn'/'t see this)

