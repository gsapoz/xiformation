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

  function searchPlayer(name, is_image_array = false) {
    if (is_image_array == true) {
      const filteredPlayers = [];
      for (let i = 0; i < images.length; i += 2) {
        const player = images[i];
        const image = images[i + 1];
        if (
          player
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .includes(name.normalize("NFD").toLowerCase())
        ) {
          filteredPlayers.push(player);
          filteredPlayers.push(image);
        }
      }
      return filteredPlayers;
    } else {
      const filteredPlayers = players.filter((player) =>
        player
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .includes(name.normalize("NFD").toLowerCase())
      );
      return filteredPlayers;
    }
  }

  function clearField(input) {
    const picker_exists = document.getElementById("player_picker");
    if (picker_exists) {
      picker_exists.remove();
    }
  }

  function setActive(id) {
    let input = document.getElementById(id);

    input.addEventListener("input", (event) => {
      if (event.target.value.length >= 4) {
        let options = searchPlayer(event.target.value, true);
        autofillPlayers(input, options);
      }
    });

    input.addEventListener("keydown", function (event) {
      if (event.key === "Backspace") {
        if (event.target.value.length >= 4) {
          let options = searchPlayer(event.target.value, true);
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

/**
 * TO-DO:
 *  1. When you click down or up on the direction pad, it has to navigate the autofill, and enter selects it
 *  2. When you click on the document, it has to terminate the autofill and clear the current input field.
 *  3. When a formation is swtiched, tmeporarily store all current input values and then reset them
 *  4. Make the player cards clickable, when its clicked you should be able to edit the player
 */
