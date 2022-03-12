require('dotenv').config();
const express = require('express');
const path = require('path');

const server = express();
const { API_KEY, PORT } = process.env;

server.use(express.static(path.resolve(__dirname + '/react-ui/build')));

server.get('/heartbeat',(req, res) => {
    res.json({
"is": "working"
    })
});

server.get('*', (req, res) =>{
    res.sendFile(path.resolve(_dirname + './react-ui/build/index.html'));
})

server.listen(PORT, () => {
    console.log(`The server is listening at port ${PORT}`);
});

