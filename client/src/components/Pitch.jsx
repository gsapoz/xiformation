import React from "react";
import Player from "./Player";
import "../index.css";

function Pitch({ data }) {
  /** */
  return (
    <div class="formation-container">
      {data.positions.map((position, index) => (
        <Player
          left={data.left[index]}
          top={data.top[index]}
          position={data.positions[index]}
          name={"Mudrk"}
          id={"1920"}
        />
      ))}
      <form>
        <select id="formation-picker">
          <option value="433">433</option>
          <option value="442">442</option>
          <option value="4312">4312</option>
          <option value="433">4141</option>
          <option value="442">343</option>
          <option value="4312">3412</option>
          <option value="4312">3133</option>
          <option value="4312">3331</option>
        </select>
      </form>
    </div>
  );
}

export default Pitch;
