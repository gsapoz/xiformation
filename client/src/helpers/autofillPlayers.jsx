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
    let pickerItems = document.querySelectorAll("#player-picker div");

    if (pickerItems.length > 0) {
      let activeItem = document.querySelector(
        "#player-picker .autocomplete-active"
      );

      if (activeItem) {
        switch (event.key) {
          case "ArrowDown":
            activeItem.classList.remove("autocomplete-active");
            let nextItem =
              activeItem.nextSibling || pickerItems[pickerItems.length - 1];
            nextItem.classList.add("autocomplete-active");
            break;
          case "ArrowUp":
            activeItem.classList.remove("autocomplete-active");
            let prevItem = activeItem.previousSibling || pickerItems[0];
            prevItem.classList.add("autocomplete-active");
            break;
          case "Enter":
            input.value = activeItem.textContent;
            // setPlayer(activeItem.textContent, this.images);
            removePickers();
            break;
          default:
            activeItem.classList.remove("autocomplete-active");
            break;
        }
      } else {
        if (event.key == "ArrowDown" || event.key == "ArrowUp") {
          pickerItems[0].classList.add("autocomplete-active");
        }
      }
    }
  });
}

function removePickers() {
  const picker_exists = document.getElementById("player-picker");
  if (picker_exists) {
    picker_exists.remove();
  }

  document.removeEventListener("keydown", function () {});
}
