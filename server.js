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

userList = {};

io.on("connect", (socket) => {

  socket.on("add user", (name) => {
    userList.push({socket.id: name});
    socket.emit("user update", userList.values);
  });

  socket.on("chat message", (msg) => {
    socket.broadcast.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    userList.delete[socket.id];
    socket.broadcast.emit("user update", userList.values());
  });

});

server.listen(port, () => console.log(`Listening on port ${port}`));
