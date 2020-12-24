const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const send = require("./email");

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.post("/send", (req, res) => {
  const { name, email, message } = req.body;
  send(name, email, message, (bool) => {
    return bool
      ? res.status(200).json({ success: true })
      : res.status(400).json({ success: false });
  });
});

if (process.env.NODE_ENV === "production") {
  // Serve all static files
  app.use(express.static(path.join(__dirname, "..", "client/build")));

  // Route requests to CRA
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client/build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
