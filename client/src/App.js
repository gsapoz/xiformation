import React, { useEffect, useState } from "react";
import Pitch from "./components/Pitch";

function App() {
  const [Leagues, setBackendData] = useState([{}]);
  var league_names = [];
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      <Pitch formation={"433"} />
      {/* <p>League index: </p>
      {typeof Leagues === "undefined" ? (
        <p>Loading...</p>
      ) : (
        Leagues.map((league) => {
          return <h1>{league.name}</h1>;
        })
      )} */}
    </div>
  );
}

export default App;
