express = require("express");
http = require("http");

const app = express();
const server = http.createServer(app);

const io = require("socket.io")(server, {
    handlePreflightRequest: (req, res) => {
        const headers = {
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
            "Access-Control-Allow-Credentials": true
        };
        res.writeHead(200, headers);
        res.end();
    }
});

const port = process.env.PORT || 5000;

io.on("connect", (socket) => {

  socket.on("chat message", (msg) => {
    socket.broadcast.emit("chat message", msg);
  });

});

server.listen(port, () => console.log(`Listening on port ${port}`));
