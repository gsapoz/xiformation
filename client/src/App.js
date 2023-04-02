import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Player from "./components/Player";

function App() {
  const [formation, setFormationData] = useState([{}]);

  useEffect(() => {
    fetch("/formations/433")
      //defaults to the first option on load
      .then((response) => response.json())
      .then((data) => {
        setFormationData(data);
      });
  }, []);

  const formationSelected = (event) => {
    const formationId = event.target.value;
    fetch(`/formations/${formationId}`)
      .then((response) => response.json())
      .then((data) => {
        setFormationData(data);
      });
  };

  if (!formation || !formation.positions) {
    return <p>Loading...</p>;
  }

  return (
    <div className="section">
      <div className="pitch-container">
        <div className="pitch">
          {formation.left.map((x, key) => {
            const playerProps = {
              position: formation.positions[key],
              x_axis: x,
              y_axis: formation.top[key],
              image:
                "https://www.fotmob.com/_next/static/media/player_fallback.9cac7bea.png",
              name: "",
            };

            return <Player key={key} {...playerProps} />;
          })}

          <form>
            <select id="formation-picker" onChange={formationSelected}>
              <option value="433">433</option>
              <option value="442">442</option>
              <option value="4312">4312</option>
              <option value="4141">4141</option>
              <option value="343">343</option>
              <option value="3412">3412</option>
              <option value="3133">3133</option>
              <option value="3331">3331</option>
            </select>
          </form>
        </div>
      </div>
      <div className="form-container">
        <Form formation={formation} />
        <h4>XI Formation!</h4>
      </div>
    </div>
  );
}

export default App;
