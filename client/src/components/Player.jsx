import React, { useEffect, useState, useRef } from "react";
import "../index.css";

export function setPlayer(role, images) {
  const input = document.getElementById(role);
  const player = document.getElementById(role + "p");
  const nametag = document.getElementById(role + "n");
  const lastname = getLastName(input.value);
  nametag.className = input.value;
  nametag.textContent = lastname;
  const image_url = getPlayerImage("Declan Rice", images); //for example
  player.firstChild.setAttribute("src", image_url);
}

function getPlayerImage(name, players) {
  const index = players.findIndex((player) =>
    player.toLowerCase().includes(name.toLowerCase())
  );

  const urlindex = index + 1;

  return players[urlindex];
}

function getLastName(fullname) {
  const words = fullname.split(" ");
  if (words.length != 1) {
    words.shift(); // remove the first name
    const lastname = words.join(" ");
    return lastname;
  }
  return fullname;
}

const Player = (props) => {
  const nameRef = useRef(null);

  const playerStyle = {
    left: props.x_axis,
    top: props.y_axis,
  };

  return (
    <div className="player" id={props.position + "p"} style={playerStyle}>
      <img src={props.image} />
      <a ref={nameRef} id={props.position + "n"}>
        {props.name}
      </a>
    </div>
  );
};

export default Player;
