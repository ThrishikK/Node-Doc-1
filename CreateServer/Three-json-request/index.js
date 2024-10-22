const fs = require("fs");
const http = require("http");
const url = require("url");
const path = require("path");

const data = fs.readFileSync(
  path.join(__dirname, "../dataForApi/movements.json"),
  "utf-8"
);
const dataObj = JSON.parse(data);

const text3 =
  "<h1> Your URL doesn't match any.<br/>Here is the fact However, the success of the hartal in Delhi, on 30 March, was overshadowed by tensions running high, which resulted in rioting in the Punjab, Delhi and Gujarat.[21][22] Deciding that Indians were not ready to make a stand consistent with the principle of nonviolence, an integral part of satyagraha (disobeying the British colonial government's laws without using violence), Gandhi suspended the resistance.</h1>";

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end(text3);
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening on the post no 8000...");
});
