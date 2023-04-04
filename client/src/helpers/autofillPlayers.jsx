import { setPlayer } from "../components/Player";

export function autofillPlayers(input, options) {
  removePickers();
  const picker = document.createElement("div");
  picker.setAttribute("id", "player-picker");
  picker.setAttribute("class", "autocomplete-items");

  for (let i = 0; i < options.length; i += 2) {
    let option = document.createElement("div");
    option.textContent = options[i];
    option.addEventListener("click", function (fillInput) {
      input.value = options[i];
      setPlayer(input.id, options);
      removePickers();
    });
    picker.appendChild(option);
  }

  input.insertAdjacentElement("afterend", picker);
}

function removePickers() {
  const picker_exists = document.getElementById("player-picker");
  if (picker_exists) {
    picker_exists.remove();
  }
}
