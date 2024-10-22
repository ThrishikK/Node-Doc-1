const fs = require("fs");

const text =
  "Mahatma Gandhi, among other Indian leaders,[g] was extremely critical of the Act and argued that not everyone should be punished in response to isolated political crimes.";

fs.writeFile("./notes.txt", text, "utf-8", (err) => {
  if (err) {
    console.log("Failed to write the file.");
  } else {
    console.log("Written successfully.");
  }
});
