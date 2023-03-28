import React, { useEffect, useState } from "react";
import Builder from "./components/Builder";

function App() {
  const [Formations, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/formations")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return <Builder data={Formations} />;
}

export default App;
