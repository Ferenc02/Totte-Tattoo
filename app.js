const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("src/frontend"));
app.use("/media", express.static("src/backend/media"));

app.use(express.static("src/frontend/pages"));

app.listen(port, () => {
  console.log(`🚀 Web Server startad på http://localhost:${port} 🚀`);
});
