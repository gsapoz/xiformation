// import React, { useRef, useState } from "react";

// function Form({ formation, players }) {
function Form({ formation }) {
  // const inputRef = useRef(null);
  // const [value, setValue] = useState("");

  // function handleChange() {
  //   const currentValue = inputRef.current.value;
  //   setValue(currentValue);
  // }

  return (
    <form>
      {formation.positions.map((position) => (
        <div class="input-container">
          <label for={position}>{position}</label>
          <input type="text" id={position} />
        </div>
      ))}
    </form>
  );
}

export default Form;
