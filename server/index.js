const express = require("express");
const app = express();

const hostname = "localhost";
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Listening at: http://${hostname}:${port}`);
});
