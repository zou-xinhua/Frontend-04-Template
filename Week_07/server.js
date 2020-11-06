const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request received');
    console.log(req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Foo', 'bar');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`<html mate="a" >
    <head>
        <style>
        body div #main{
            width: 100px;
            background-color: red;
        }
        </style>
    </head>
    <body>
        <div id="main"></div>
    </body>
</html>`);
})

server.listen(8089);

console.log('server started');
