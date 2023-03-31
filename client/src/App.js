import React, { useEffect, useState } from "react";
import Builder from "./components/Builder";
import Form from "./components/Form";

function App() {
  const [Formations, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/formations")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div class="section">
      <Builder data={Formations} />
      <Form data={Formations} />
    </div>
  );
}

export default App;
