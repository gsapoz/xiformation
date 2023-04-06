import { setPlayer } from "../components/Player";

export function autofillPlayers(input, options) {
  removePickers();
  const picker = document.createElement("div");
  picker.setAttribute("id", "player-picker");
  picker.setAttribute("class", "autocomplete-items");

  for (let i = 0; i < options.length; i += 2) {
    let option = document.createElement("div");
    option.textContent = options[i];
    option.addEventListener("click", function (event) {
      input.value = options[i];
      setPlayer(input.id, options);
      removePickers();
    });
    picker.appendChild(option);
  }

  input.insertAdjacentElement("afterend", picker);

  document.addEventListener("keydown", function (event) {
    const pickerItems = document.querySelectorAll("#player-picker div");

    if (pickerItems.length > 0) {
      let activeItem = document.querySelector(
        "#player-picker .autocomplete-active"
      );
      switch (event.key) {
        case "ArrowDown":
          if (activeItem) {
            activeItem.classList.remove("autocomplete-active");
            let nextItem =
              activeItem.nextSibling || pickerItems[pickerItems.length - 1];
            nextItem.classList.add("autocomplete-active");
          } else {
            pickerItems[0].classList.add("autocomplete-active");
          }

          break;
        case "ArrowUp":
          if (activeItem) {
            activeItem.classList.remove("autocomplete-active");
            let prevItem = activeItem.previousSibling || pickerItems[0];
            prevItem.classList.add("autocomplete-active");
          } else {
            pickerItems[0].classList.add("autocomplete-active");
          }

          break;
        case "Enter":
          if (activeItem) {
            input.value = activeItem.textContent;
            activeItem.classList.remove("autocomplete-active");
            removePickers();
          }
          break;
        default:
          break;
      }
    }
  });
}

function removePickers() {
  const picker_exists = document.getElementById("player-picker");
  if (picker_exists) {
    picker_exists.remove();
  }
}
