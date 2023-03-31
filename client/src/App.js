import React, { useEffect, useState } from "react";
import Builder from "./components/Builder";
import Form from "./components/Form";

function App() {
  const [Formations, setFormationData] = useState([{}]);
  const [Players, setPlayerCollection] = useState([{}]);

  useEffect(() => {
    fetch("/formations")
      .then((response) => response.json())
      .then((data) => {
        setFormationData(data);
      });
  }, []);

  useEffect(() => {
    fetch("/players")
      .then((response) => response.json())
      .then((data) => {
        setPlayerCollection(data);
      });
  });

  /**
   *
   *  We did this all wrong, lol
   *
   *  We need to load all the div components in this page at once and figure out module logic later.
   *
   *  Procedure:
   *
   *  1. Implement Player.jsx, parameters must include Player Object and X/Y Positions
   *  2. Implement Input.jsx, this is the form field, pass in Position and Value, must have autocomplete (see: /player_names)
   *  3. in the server/index.js file, we need to create a route that searches formations.json by formation name (/formations/{selection})
   *
   *
   */
  return (
    <div class="section">
      <Builder data={Formations} formation={"433"} />
      <Form data={Players} formation={"433"} list={Formations} />
    </div>
  );
}

export default App;
