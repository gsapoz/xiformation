import React, { useEffect, useState } from "react";
import "../index.css";

export function setPlayer(id) {
  let player = document.getElementById(id);
  alert(player.id);
  alert(player.textContent);
}

const Player = (props) => {
  // const [props, setPlayerCollection] = useState([{}]);

  // useEffect(() => {
  //   fetch(`/players/${name}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPlayerCollection(data);
  //     });
  // }, []);

  const playerStyle = {
    left: props.x_axis,
    top: props.y_axis,
  };

  return (
    <div className="player" id={props.position} style={playerStyle}>
      <img src={props.image} />
      <a>{props.name}</a>
    </div>
  );
};

export default Player;
