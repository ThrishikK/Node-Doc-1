const fs = require("fs");

console.log("One");

fs.readFile("./notes.txt", "utf-8", (err, data) => {
  console.log(data);
});

console.log("Two");
