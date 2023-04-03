const topfive = require("topfive-api");
const express = require("express");
var fs = require("fs");
const app = express();
var data;

app.get("/", (req, res) => {
  res.json({
    metadata: [
      "author: Gary Sapozhnikov",
      "project website: github.com/gsapoz/xiformation",
      "keywords: soccer, football, england, spain, germany, italy, france, world cup, euro cup, fifa, uefa, react, node, express",
    ],
  }); //init: proxy test
});

app.get("/players", (req, res) => {
  /** Returns every attribute for every player, sorted by player */
  const players = topfive.getAllPlayers();
  res.json(players);
});

app.get("/players/:name", (req, res) => {
  //ie: http://localhost:5000/player/Mason%20Mount
  const playerName = req.params.name;
  const props = topfive.getPlayerAttributes(playerName);
  res.json(props);
});

app.get("/player_names", (req, res) => {
  /** Isolated Player Names for input autocomplete */
  const players = topfive.getAllPlayers();
  let player_names = [];
  for (let i = 0; i < players.length; i++) {
    player_names.push(players[i].name);
  }
  res.json(player_names);
});

app.get("/player_images", (req, res) => {
  /** Player Images, mapped to the name of the players */
  const players = topfive.getAllPlayers();
  let player_names = [];
  for (let i = 0; i < players.length; i++) {
    player_names.push(players[i].name, players[i].image);
  }
  res.json(player_names);
});

app.get("/formations", (req, res) => {
  /** All formations and all their x/y-axis metrics  */
  fs.readFile("components/formations.json", "utf8", function (err, data) {
    if (err) throw err;
    data = JSON.parse(data);
    // const formation = data.find((formation) => formation.id === "443");
    // res.json(formation);
    res.json(data);
  });
});

app.get("/formations/:selection", (req, res) => {
  //Formation search method for formation-selector tool
  const selection = req.params.selection;

  fs.readFile("components/formations.json", "utf8", function (err, data) {
    if (err) throw err;
    data = JSON.parse(data);

    const props = data.find((formation) => formation.formation === selection);

    res.json(props);
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
