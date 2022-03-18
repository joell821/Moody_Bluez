require('dotenv').config();
const fetch = require("node-fetch");
const express = require('express');
const path = require('path');

const server = express();
const { API_KEY, PORT } = process.env;

//  CORS
server.use(function(req, res, next) {
    const allowList = [
      "http://localhost:3000",
    ];
    const origin = req.headers.origin;
    if (allowList.indexOf(origin) > -1) {
      res.header("Access-Control-Allow-Origin", origin);
    }
    res.header(
      "Access-Control-Allow-Headers",
      "Accept, Authorization, Content-Type, Origin, X-Requested-With"
    );
    res.header("Access-Control-Allow-Methods", "DELETE, GET, PATCH, POST, PUT");
    res.header("Access-Control-Allow-Credentials", true);
  
    if (req.method === "OPTIONS") {
      return res.sendStatus(204);
    }
    next();
  });




server.use(express.static(path.resolve(__dirname + '/react-ui/build')));

server.get('/heartbeat',(req, res) => {
    res.json({
"is": "working"
    })
});

server.get("/location/:zip", async (req, res) => {
    const {zip} = req.params;
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API_KEY}&units=imperial`;

    const response = await fetch(url);
    const data = await response.json();

        res.json( data )
})

server.get('*', (req, res) =>{
    res.sendFile(path.resolve(_dirname + './react-ui/build/index.html'));
})

server.listen(PORT, () => {
    console.log(`The server is listening at port ${PORT}`);
});

