const Express = require('express');
const http = require('http');
const app = Express();
const path = require('path');

app.use("/static", Express.static(path.join(__dirname, './static'), {fallthrough: false, index: false, maxage: '1d'}));


app.get('/', function (req, res) {
	res.send('\
<html>\
    <head>\
    </head>\
    <body>\
        從iframe拿來的Token = <span id="token"></span><br/>\
        <iframe src="http://crossdomain.com.tw:1122/iframe" id="iframe"></iframe><br/>\
        <input type="button" value="送出iframe的form" onclick="submitIframe()"/>\
        <script src="/static/index.js"></script>\
    </body>\
</html>');
});

app.get('/iframe', function (req, res) {
	res.send('\
<html>\
    <head>\
    </head>\
    <body>\
        This is iframe form\
        <form>\
            卡號 : <input type="text" />\
        </form>\
        <script src="http://crossdomain.com.tw:1122/static/crossdomain_parent.js"></script>\
    </body>\
</html>');
});
http.createServer(app).listen(1122);
