import React, { useRef, useState, useEffect } from "react";
import { setPlayer } from "./Player";
import { autofillPlayers } from "../helpers/autofillPlayers";

function Form({ formation }) {
  const [players, setPlayerCollection] = useState([{}]);
  const [images, setPlayerImages] = useState([{}]);
  useEffect(() => {}, [formation]);

  useEffect(() => {
    fetch("/player_names")
      .then((response) => response.json())
      .then((data) => {
        setPlayerCollection(data);
      });
  }, []);

  useEffect(() => {
    fetch("/player_images")
      .then((response) => response.json())
      .then((data) => {
        setPlayerImages(data);
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
        autofillPlayers(input, options);
      }
    });

    input.addEventListener("keydown", function (event) {
      if (event.key === "Backspace") {
        if (event.target.value.length >= 4) {
          let options = searchPlayer(event.target.value);
          autofillPlayers(input, options);
        } else {
          const picker_exists = document.getElementById("player-picker");
          if (picker_exists) {
            picker_exists.remove();
          }
        }
      }
    });
    input.addEventListener("change", (event) => {
      let name = event.target.value;
      setPlayer(id, images);
      clearField();
    });
  }

  return (
    <form autoComplete="off">
      {formation &&
        formation.positions.map((position) => (
          <div className="input-container autocomplete" key={position}>
            <label htmlFor={position}>{position}</label>
            <input
              type="text"
              id={position}
              onClick={() => setActive(position)}
              placeholder="Player Name"
            />
          </div>
        ))}
    </form>
  );
}

export default Form;
