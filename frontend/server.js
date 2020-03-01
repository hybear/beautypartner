const next = require('next');
const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');

const httpPort = 3000;
const httpsPort = 3001;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

const options = {
  key: fs.readFileSync('./certificates/localhost.key'),
  cert: fs.readFileSync('./certificates/localhost.crt'),
};

app.prepare().then(() => {
  server.all('*', (req, res) => {
    return handle(req, res);
  });
  http.createServer(server).listen(httpPort);
  https.createServer(options, server).listen(httpsPort);
});
