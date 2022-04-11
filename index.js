const http = require("http");

// Create simple http server to open a connection.
const httpServer = http.createServer((req, res) => {
  console.log("Receive a request.");
});

httpServer.listen(3000, () => {
  console.log("Listening at port 3000");
});
