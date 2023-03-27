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
        <Player
          left={"40%"}
          top={"80px"}
          position={"CF"}
          name={"Havertz"}
          id={"106"}
        />
        <Player
          left={"72%"}
          top={"80px"}
          position={"RW"}
          name={"Madueke"}
          id={"864"}
        />
        <Player
          left={"12%"}
          top={"34%"}
          position={"LCM"}
          name={"Mount"}
          id={"110"}
        />
        <Player
          left={"40%"}
          top={"34%"}
          position={"CM"}
          name={"Rice"}
          id={"109"}
        />
        <Player
          left={"68%"}
          top={"34%"}
          position={"RCM"}
          name={"Fernández"}
          id={"690"}
        />
        <Player
          left={"6%"}
          top={"55%"}
          position={"LC"}
          name={"Chilwell"}
          id={"218"}
        />
        <Player
          left={"28%"}
          top={"55%"}
          position={"LCB"}
          name={"Badiashile"}
          id={"888"}
        />
        <Player
          left={"50%"}
          top={"55%"}
          position={"RCB"}
          name={"Fofana"}
          id={"519"}
        />
        <Player
          left={"72%"}
          top={"55%"}
          position={"RB"}
          name={"James"}
          id={"103"}
        />
        <Player
          left={"40%"}
          top={"76%"}
          position={"GK"}
          name={"Mendy"}
          id={"45"}
        />
      </div>
    </div>
  );
};

export default Pitch;
