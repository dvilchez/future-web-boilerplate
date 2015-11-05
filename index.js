#!/usr/bin/env node

var app = require('./app');
var http = require('http');

var port = process.env.PORT || '3000';
var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', () => console.log(`Listening on port ${port}`));

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
