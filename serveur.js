var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/plain"});
	
    if (page == '/') {
        res.write('Bienvenu sur 4honor');
    }
    else if (page == '/clubs') {
        res.write('json avec la liste des clubs');
    }
    else if (page == '/club') {
            var params = querystring.parse(url.parse(req.url).query);
			if ('nomclub' in params) {
				res.write('json avec le detail du club ' + params['nomclub']);
			}
			else {
				res.write('error: veuillez renseigner un club correct (?nomclub=...)');
			}
    }
    res.end();
});
server.listen(8080);