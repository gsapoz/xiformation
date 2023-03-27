import React from "react";
import "../index.css";

const Player = (props) => {
  const baseImgUrl = "https://d153u3nqeqj1g3.cloudfront.net/";
  const url = baseImgUrl + props.id + ".png";
  const playerStyle = {
    left: props.left,
    top: props.top,
  };
  return (
    <div class="player" id={props.position} style={playerStyle}>
      <img src={url} />
      <a>{props.name}</a>
    </div>
  );
};

export default Player;
