const path = require('path');
const WebSocket = require('ws');
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, 'public')))

const server = new WebSocket.Server({ port: 6969 });

server.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        ws.send(`Echo: ${message}`); // Send back the received message
    });

    ws.on('close', () => console.log('Client disconnected'));
});

console.log('WebSocket server running on ws://localhost:8080');




app.listen(PORT, () => {
    console.log('runnin on 8080')
}) 
