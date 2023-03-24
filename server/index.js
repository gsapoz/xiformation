const express = require("express");
var fs = require("fs");
const app = express();
var data;

app.get("/", (req, res) => {
  res.json({ metadata: ["author", "project website", "keywords"] }); //init: proxy test
});

app.get("/api", (req, res) => {
  fs.readFile("topfive-api/info.json", "utf8", function (err, data) {
    if (err) throw err;
    data = JSON.parse(data);
    res.json(data);
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
