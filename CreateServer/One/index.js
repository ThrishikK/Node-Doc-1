const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello There");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening on the post no 8000...");
});
