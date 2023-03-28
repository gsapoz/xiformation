import React from "react";
import Player from "./Player";
import "../index.css";

const Pitch = (props) => {
  return (
    <div class="container">
      <div class="pitch">
        <Player
          left={"8%"}
          top={"80px"}
          position={"LW"}
          name={"Mudrk"}
          id={"1920"}
        />
      </div>
    </div>
  );
};

export default Pitch;
