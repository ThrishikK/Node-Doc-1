const fs = require("fs");

const text = fs.readFileSync("./notes.txt", "utf-8");
console.log(text);
