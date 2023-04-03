import React, { useRef, useState, useEffect } from "react";
import { setPlayer } from "./Player";

function Form({ formation }) {
  const [players, setPlayerCollection] = useState([{}]);

  useEffect(() => {}, [formation]);

  useEffect(() => {
    fetch("/player_names")
      .then((response) => response.json())
      .then((data) => {
        setPlayerCollection(data);
      });
  }, []);

  if (!formation || !formation.positions) {
    return <p>Loading...</p>;
  }

  function searchPlayer(name) {
    const filteredPlayers = players.filter((player) =>
      player.toLowerCase().includes(name.toLowerCase())
    );

    return filteredPlayers;
  }

  function showOptions(input, players) {
    const picker_exists = document.getElementById("player_picker");
    if (picker_exists) {
      picker_exists.remove();
    }
    const player_picker = document.createElement("select");
    player_picker.id = "player_picker";
    const option = document.createElement("option");
    option.value = "Gary";
    option.textContent = "Gary";
    player_picker.appendChild(option);
    input.insertAdjacentElement("afterend", player_picker);
  }

  function clearField(input) {
    const picker_exists = document.getElementById("player_picker");
    if (picker_exists) {
      picker_exists.remove();
    }

    // input.target.remove
  }

  function setActive(id) {
    let input = document.getElementById(id);

    input.addEventListener("input", (event) => {
      if (event.target.value.length >= 4) {
        let options = searchPlayer(event.target.value);
        let picker = showOptions(input, options);
      }
    });

    input.addEventListener("change", (event) => {
      let name = event.target.value;

      setPlayer(id);
      clearField();
    });
  }

  return (
    <form>
      {formation &&
        formation.positions.map((position) => (
          <div className="input-container" key={position}>
            <label htmlFor={position}>{position}</label>
            <input
              type="text"
              id={position}
              onClick={() => setActive(position)}
            />
          </div>
        ))}
    </form>
  );
}

export default Form;
