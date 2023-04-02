import React, { useRef, useState, useEffect } from "react";

// function Form({ formation, players }) {
function Form({ formation }) {
  useEffect(() => {}, [formation]);

  if (!formation) {
    return <p>Loading...</p>;
  }

  if (!formation.positions) {
    return <p>Loading...</p>;
  }

  return (
    <form>
      {formation &&
        formation.positions.map((position) => (
          <div className="input-container" key={position}>
            <label htmlFor={position}>{position}</label>
            <input type="text" id={position} />
          </div>
        ))}
    </form>
  );
}

export default Form;
