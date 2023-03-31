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

  return (
    <div class="section">
      <Builder data={Formations} formation={"433"} />
      <Form data={Players} formation={"433"} list={Formations} />
    </div>
  );
}

export default App;
