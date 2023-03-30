const topfive = require("topfive-api");
const express = require("express");
var fs = require("fs");
const app = express();
var data;

app.get("/", (req, res) => {
  res.json({ metadata: ["author", "project website", "keywords"] }); //init: proxy test
});

app.get("/players", (req, res) => {
  const players = topfive.getAllPlayers();
  res.json(players);
});

app.get("/players/:name", (req, res) => {
  //ie: http://localhost:5000/player/Mason%20Mount
  const playerName = req.params.name;
  const props = topfive.getPlayerAttributes(playerName);
  res.json(props);
});

app.get("/formations", (req, res) => {
  fs.readFile("components/formations.json", "utf8", function (err, data) {
    if (err) throw err;
    data = JSON.parse(data);
    const formation = data.find((formation) => formation.id === "443");
    // res.json(formation);
    res.json(data);
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
