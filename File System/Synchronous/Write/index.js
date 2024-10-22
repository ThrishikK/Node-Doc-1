const fs = require("fs");

const text =
  "The Anarchical and Revolutionary Crimes Act of 1919, popularly known as the Rowlatt Act, was a law, applied during the British India period.";

fs.writeFileSync("./notes.txt", text);
