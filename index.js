const http = require("http");
const WebSocketServer = require("websocket").server;

// Create simple http server to open a connection.
const httpServer = http.createServer((req, res) => {
  console.log("Receive a request.");
});

// Create a websocket server to send a handshake.
const websocket = new WebSocketServer({ httpServer });
let connection = null;

httpServer.listen(3000, () => {
  console.log("Listening at port 3000.");
});

websocket.on("request", (request) => {
  console.log("Receive a websocket connection.");
  connection = request.accept(null, request.origin);

  connection.on("close", () => console.log("Connection closed."));

  connection.on("message", (message) =>
    console.log(`message: ${message.utf8Data}`)
  );
});
