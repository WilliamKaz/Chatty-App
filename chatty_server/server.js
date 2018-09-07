// server.js

const express = require('express');
const SocketServer = require('ws').Server;

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

let users = {type: 'count', online: 0 };



wss.on('connection', (ws) => {
  console.log('Client connected')
  users.online += 1;
  wss.clients.forEach(function each(client) {
      client.send(JSON.stringify(users));
  });


  ws.on('message', function incoming(data) {
    console.log(data)
    let newMessage = JSON.parse(data);
    wss.clients.forEach(function each(client) {
      client.send(JSON.stringify(newMessage));
    });
  })

   ws.on('close', () => {
    console.log('Client disconnected')
    client.send(JSON.stringify(users));
    users.online -=1;

  });
})


