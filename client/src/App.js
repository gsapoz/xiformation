import React, { useEffect, useState } from "react";
import Form from "./components/Form";

function lol() {
  console.log("lol");
}

function App() {
  const [Players, setPlayerCollection] = useState([{}]);
  const [Formation, setFormationData] = useState([{}]);

  useEffect(() => {
    fetch("/players")
      .then((response) => response.json())
      .then((data) => {
        setPlayerCollection(data);
      });
  });

  useEffect(() => {
    fetch("/formations/433")
      .then((response) => response.json())
      .then((data) => {
        setFormationData(data);
      });
  }, []);

  return (
    <div class="section">
      <div class="pitch-container">
        <div class="pitch">
          <form>
            <select id="formation-picker" onChange={lol}>
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
      </div>
      <div class="form-container">
        <Form formation={Formation} />

        <h4>XI Formation!</h4>
      </div>
    </div>
  );
}

export default App;
