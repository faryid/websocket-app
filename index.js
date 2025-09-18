const fs = require("fs");
const url = require("url");
const http = require("http");

const WebSocketServer = require("websocket").server;

// Configuration for http and websocket servers.
const PORT = 3000;
const STATIC_DIR = "./public";

// Create simple http server to open a connection.
const httpServer = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  let filePath = STATIC_DIR + (parsedUrl.pathname === "/" ? "/index.html" : parsedUrl.pathname);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end("404 - Not Found");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    }
  });
});

httpServer.listen(PORT, () => {
  console.log("Listening at port " + PORT + ".");
});
